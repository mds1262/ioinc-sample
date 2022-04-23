import { toastController, IonicSafeString, ToastButton,  } from '@ionic/vue'

type DeviceMode = 'ios' | 'md';

export interface ToastOptions {
    header?: string;
    message?: string | IonicSafeString;
    cssClass?: string | string[];
    duration?: number;
    buttons?: (ToastButton | string)[];
    position?: 'top' | 'bottom' | 'middle';
    translucent?: boolean;
    animated?: boolean;
    icon?: string;
    htmlAttributes?: { [key: string]: any };
  
    color?: string;
    mode?: DeviceMode;
    keyboardClose?: boolean;
    id?: string;
  
    // enterAnimation?: AnimationBuilder;
    // leaveAnimation?: AnimationBuilder;
  }

const generateToast = async(options: ToastOptions): Promise<HTMLIonToastElement> => {
    return await toastController.create(options);
}

export default generateToast;