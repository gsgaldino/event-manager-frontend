import { toast as reactToast, ToastContainer } from 'react-toastify';

const toast = {
  default: (text: string) => reactToast(text),
  success: (text: string) => reactToast.success(text, {
    position: reactToast.POSITION.BOTTOM_LEFT,
  }),
  error: (text: string) => reactToast.error(text, {
    position: reactToast.POSITION.BOTTOM_LEFT,
  }),
  warn: (text: string) => reactToast.warn(text, {
    position: reactToast.POSITION.BOTTOM_LEFT,
  }),
};

export { toast, ToastContainer };
