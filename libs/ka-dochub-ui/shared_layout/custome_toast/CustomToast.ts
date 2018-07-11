import { ToastOptions } from 'ng2-toastr';
export class CustomToast extends ToastOptions {
  toastLife = 7000;
  animate = 'flyRight';
  showCloseButton = true;
  positionClass = 'toast-bottom-center';
}
