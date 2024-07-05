/**
 * Defines the possible types for Notifee Android icons.
 */
export type NotifeeAndroidIconType = "large" | "small";

/**
 * Describes the structure of a Notifee Android icon.
 */
export type NotifeeAndroidIcon = {
  /** The name of the icon file without extension. */
  name: string;
  /** The path to the icon file. */
  path: string;
  /** The type of the icon, either 'large' or 'small'. */
  type: NotifeeAndroidIconType;
};

/**
 * Defines the possible environments for Apple Push Notification Service (APNs).
 */
export type APSEnvironmentMode = "production" | "development";

/**
 * Describes the properties required for configuring Notifee-Expo-Plugin in an Expo project.
 */
export type NotifeeExpoPluginProps = {
  /**
   * Sets the APS Environment Entitlement. Determines whether to use the development or production
   * Apple Push Notification service (APNs).
   */
  apsEnvMode: APSEnvironmentMode;

  /**
   * Specifies Android icons to be added to the appropriate resource folders for notification purposes.
   * Each icon should be defined with a name, path, and type (large or small).
   */
  androidIcons?: NotifeeAndroidIcon[];

  /**
   * Specifies the background modes to enable for the app.
   * If not provided, the default background modes are used.
   * Default background modes: ["remote-notification"].
   */
  backgroundModes?: string[];

  /**
   * Sets the deployment target of the notification service extension for iOS.
   * This should match the deployment target of the main app.
   */
  iosDeploymentTarget: string;

  /**
   * Enables communication notifications, which adds the necessary configurations
   * for communication notifications as mentioned in https://github.com/invertase/notifee/pull/526.
   */
  enableCommunicationNotifications?: boolean;

  /**
   * Automatically signs the app and the notification service extension targets with the provided Apple developer team ID.
   */
  appleDevTeamId?: string;

  /**
   * Specifies the path to a custom notification service file, which should already include
   * the necessary configurations for Notifee along with any additional customizations.
   */
  customNotificationServiceFilePath?: string;
};
