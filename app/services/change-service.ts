import {Injectable, NgZone} from 'angular2/core';

declare var app: any;

@Injectable()
export class ChangeService {
  zone: NgZone;

  constructor(zone: NgZone) {
    this.zone = zone;
  }

  /*
    Gets the document with the provided id from the provided service and listens
    for changes ('created', 'updated', 'patched' or 'removed' events) on the
    document. The updateFunction is called when a change is detected and can be
    used by the calling component to update the model.
  */
  onChange(serviceName: string, id: string, updateFunction: (updateData: any) => void): void {
    app.service(serviceName).get(id).then((updateData) => {
      this.zone.run(() => {
        updateFunction(updateData);
      });
    });

    app.service(serviceName).on('created', (updateData) => {
      if (updateData['_id'] === id) {
        this.zone.run(() => {
          updateFunction(updateData);
        });
      }
    });

    app.service(serviceName).on('patched', (updateData) => {
      if (updateData['_id'] === id) {
        this.zone.run(() => {
          updateFunction(updateData);
        });
      }
    });

    app.service(serviceName).on('updated', (updateData) => {
      if (updateData['_id'] === id) {
        this.zone.run(() => {
          updateFunction(updateData);
        });
      }
    });
  }

  onListChange(serviceName: string, query: any, updateFunction: (updateData: any[]) => void): void {
    this.getList(serviceName, query, updateFunction);

    app.service(serviceName).on('created', () => {
      this.getList(serviceName, query, updateFunction);
    });

    app.service(serviceName).on('patched', () => {
      this.getList(serviceName, query, updateFunction);
    });

    app.service(serviceName).on('updated', () => {
      this.getList(serviceName, query, updateFunction);
    });

    app.service(serviceName).on('removed', () => {
      this.getList(serviceName, query, updateFunction);
    });
  }

  private getList(serviceName: string, query: any, updateFunction: (updateData: any[]) => void): void {
    app.service(serviceName).find({query: query}).then((updateData) => {
      this.zone.run(() => {
        updateFunction(updateData.data);
      });
    });
  }
}
