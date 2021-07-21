# Mac Notifier

A simple application to trigger macOS notifications.

When `start` script is executed, various options can be passed that will populate the notification.
This application uses [Electron](https://www.electronjs.org/) to pass data to [WidgetKit](https://developer.apple.com/documentation/widgetkit) to trigger the notification.

---
## Options
All options are optional.
- `--title?: string = ""`\
  Populate the title of the notification. Most unicode characters are supported, including emojis.
- `--subtitle?: string = ""`
  Populate the subtitle of the notification. Only alphanumeric characters are supported.
- `--body?: string = ""`\
  Populate the body of the notification. Only alphanumeric characters are supported.
- `--error?: string = ""`\
  Pass an error. Value will overwrite the `body` only if `isError` is set to true.
- `--isError?: boolean = "false"`
  - `"true"`\
    The `error` value will be used and notification will remain in the Notification Center until dismissed or computer restarted, unless `autoClose` is set to true.
  - `"false" | undefined`\
    The `body` value will be used and notification will be hidden from the Notification Center after 10 seconds, unless `autoClose` is set to false.
- `--autoClose?: boolean = "true"`
  - `undefined`\
    If `isError` is set to `"false"` or `undefined`, notification will remain in the Notification Center for 10 seconds.
    If `isError` is `"true"`, notification will remain in the Notification Center until dismissed or computer restarted.
  - `"true"`\
    The notification will remain in the Notification Center for 10 seconds, regardless of other options.
  - `"false"`\
    The notification will remain in the Notification Center dismissed or computer restarted, regardless of other options.
