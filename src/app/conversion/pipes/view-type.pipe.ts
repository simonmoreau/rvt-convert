import { Pipe, PipeTransform } from '@angular/core';
import { ViewType } from '../components/conversion-view-list/conversion-view-list.component';

@Pipe({
  name: 'viewType',
})
export class ViewTypePipe implements PipeTransform {
  transform(viewType: ViewType): unknown {
    switch (+viewType) {
      case ViewType.TableView:
        return 'table_view';
      case ViewType.View3D:
        return 'view_in_ar';
      case ViewType.ViewDrafting:
        return 'mode_edit';
      case ViewType.ViewPlan:
        return 'microwave';
      case ViewType.ViewSection:
        return 'home';
      case ViewType.ViewSheet:
        return 'snippet_folder';
      default:
        return null;
    }
  }
}
