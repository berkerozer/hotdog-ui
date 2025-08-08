import React from "react";
import { toast } from "sonner";
import {
  AlertCircle,
  CheckCircle,
  Info,
  Loader2,
  Megaphone,
  XCircle,
} from "lucide-react";

import { cn } from "@/lib/utils";

interface MessageProps {
  message: string;
  description?: string;
  duration?: number;
  key?: string;
  Icon?: React.ElementType;
  sound?: string;
}

const iconClasses = "w-5 h-5";

const iconColorClasses = {
  default: "text-foreground dark:text-foreground",
  success: "text-green-500 dark:text-green-400",
  error: "text-red-500 dark:text-red-400",
  warning: "text-yellow-500 dark:text-yellow-400",
  info: "text-blue-500 dark:text-blue-400",
  loading: "text-blue-500 dark:text-blue-400 animate-spin",
};

const icons = {
  default: <Megaphone className={cn(iconClasses, iconColorClasses.default)} />,
  success: (
    <CheckCircle className={cn(iconClasses, iconColorClasses.success)} />
  ),
  error: <XCircle className={cn(iconClasses, iconColorClasses.error)} />,
  warning: (
    <AlertCircle className={cn(iconClasses, iconColorClasses.warning)} />
  ),
  info: <Info className={cn(iconClasses, iconColorClasses.info)} />,
  loading: <Loader2 className={cn(iconClasses, iconColorClasses.loading)} />,
};

const styles = {
  default: "border-l-4 border-foreground dark:border-foreground bg-accent",
  success:
    "border-l-4 border-green-500 dark:border-green-400 bg-green-50 dark:bg-green-900",
  error:
    "border-l-4 border-red-500 dark:border-red-400 bg-red-50 dark:bg-red-900",
  warning:
    "border-l-4 border-yellow-500 dark:border-yellow-400 bg-yellow-50 dark:bg-yellow-900",
  info: "border-l-4 border-blue-500 dark:border-blue-400 bg-blue-50 dark:bg-blue-900",
  loading:
    "border-l-4 border-blue-500 dark:border-blue-400 bg-blue-50 dark:bg-blue-900",
};

const createToast = (
  type: "default" | "success" | "error" | "warning" | "info" | "loading",
  { message, description, duration = 3000, key, Icon, sound }: MessageProps
) => {
  if (sound) {
    const audio = new Audio(sound);
    audio.play();
  }

  const toastOptions = {
    duration,
    id: key,
    className: cn(
      "flex items-center gap-3 px-4 py-2 rounded-lg shadow-lg",
      "border border-gray-100 dark:border-gray-800",
      styles[type]
    ),
    icon: null,
    unstyled: true,
    position: "top-center" as const,
  };

  const content = (
    <div className="flex items-start gap-3 w-fit min-w-[300px] mx-auto">
      <div className="shrink-0">
        {Icon ? (
          <Icon className={cn(iconClasses, iconColorClasses[type])} />
        ) : (
          icons[type]
        )}
      </div>
      <div className="flex-1">
        <div className="font-medium text-gray-900 dark:text-gray-100 text-sm">
          {message}
        </div>
        {description && (
          <div className="text-xs text-gray-600 dark:text-gray-300 mt-1">
            {description}
          </div>
        )}
      </div>
    </div>
  );

  if (type === "loading") {
    toast.loading(content, toastOptions);
  } else if (type === "default") {
    toast(content, {
      ...toastOptions,
    });
  } else {
    toast[type](content, toastOptions);
  }
};

const message = (props: MessageProps) => createToast("default", props);
message.default = (props: MessageProps) => createToast("default", props);
message.success = (props: MessageProps) => createToast("success", props);
message.error = (props: MessageProps) => createToast("error", props);
message.warning = (props: MessageProps) => createToast("warning", props);
message.info = (props: MessageProps) => createToast("info", props);
message.loading = (props: MessageProps) => createToast("loading", props);

export { message };
