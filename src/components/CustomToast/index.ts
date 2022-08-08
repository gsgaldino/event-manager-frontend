import { toast as reactToast, ToastContainer } from 'react-toastify';

const toast = {
  default: (text: string) => reactToast(text),
  success: (text: string) => reactToast.success(text, {
    position: reactToast.POSITION.TOP_RIGHT,
  }),
  error: (text: string) => reactToast.error(text),
  warn: (text: string) => reactToast.warn(text),
};

export { toast, ToastContainer };
