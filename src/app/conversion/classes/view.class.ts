export class View {
    name: string;
    viewType: ViewType;
    viewIcon: string;
    viewTypeDisplay: string;
  
    constructor(name:string, viewType: ViewType)
    {
      this.name = name;
      this.viewType = viewType;
      this.SetViewType();
    }
  
    private SetViewType() {
      switch (this.viewType) {
        case ViewType.TableView:
            this.viewIcon = 'ceilling';
            this.viewTypeDisplay = "Reflected Ceilling Plan";
            break;
        case ViewType.View3D:
            this.viewIcon = 'house_3d';
            this.viewTypeDisplay = "View 3D";
            break;
        case ViewType.ViewDrafting:
            this.viewIcon = 'ceilling';
            this.viewTypeDisplay = "Reflected Ceilling Plan";
            break;
        case ViewType.ViewPlan:
            this.viewIcon = 'plan';
            this.viewTypeDisplay = "View Plan";
            break;
        case ViewType.ViewSection:
            this.viewIcon = 'elevation';
            this.viewTypeDisplay = "Elevation";
            break;
        case ViewType.ViewSheet:
            this.viewIcon = 'sheet';
            this.viewTypeDisplay = "Sheet";
            break;
        default:
            this.viewIcon = 'house_3d';
            this.viewTypeDisplay = "View 3D";
            break;
      }
    }
  }
  
  export enum ViewType {
    TableView = 0,
    View3D = 1,
    ViewDrafting = 2,
    ViewPlan = 3,
    ViewSection = 4,
    ViewSheet = 5
  }

  export class ViewTypeDisplay {
    displayValue: string;
    viewType: ViewType;
  }