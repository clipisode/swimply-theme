import { GetCustomDataDescriptorsFn, SiteData } from "@clipisode/theme";

export const getCustomDataDescriptors: GetCustomDataDescriptorsFn = () => {
  return [];
};

export const siteData: SiteData = {
  customCssKey: "styles.css",
  meta: {
    // values: TOPIC_TITLE
    title: "TOPIC_TITLE • Swimply",
    description: "Send a video reply (no app needed) for TOPIC_TITLE",
  },
  introScreenDesktop: {
    // values: THEME_FILE_ROOT, TOPIC_TITLE, QR_CODE, INVITATION_DISPLAY_NAME, INVITATION_URL
    markup: `
      <div class="flex flex-col items-center justify-between text-center flex-grow ">
        <div class="flex flex-col items-center justify-between text-center">
          <div class="m-2">
            <a href="https://swimply.com">
              <img src="THEME_FILE_ROOT/logo.png" class="h-12" />
            </a>
          </div>
          <h1 class="font-heading mt-3 mb-6 text-xl md:text-2xl max-h-28 md:max-h-32 overflow-hidden">TOPIC_TITLE</h1>
        </div>
        <div class="m-8">QR_CODE</div>
        <div>
          <p class="m-4 mb-6 text-base">Point your camera at the QR code to open this link on your
          phone and send <b>INVITATION_DISPLAY_NAME</b> <span class="whitespace-nowrap">a video reply.</span></p>
        </div>
      </div>
    `,
  },
  nameScreen: {
    // values: UPLOAD_PERCENTAGE, INVITATION_DISPLAY_NAME, SOCIAL_NETWORK
    nameScreenHeader: `
      <div class="my-2 flex flex-col items-center">
        <img src="THEME_FILE_ROOT/logo.png" class="h-16" />
      </div>
    `,
  },
  successScreen: {
    // values: THEME_FILE_ROOT, INVITATION_DISPLAY_NAME
    markup: `
      <div class="flex flex-grow flex-col items-center justify-between">
        <div>
          <p class="mt-12 mb-12 mx-3 text-center">Nice work!<br /><br />Your video reply for <b>INVITATION_DISPLAY_NAME</b> <span class="whitespace-nowrap">was sent.</span></p>
          <div class="m-2">
            <a href="https://swimply.com">
              <img src="THEME_FILE_ROOT/logo.png" style="width: 220px; margin: 0 auto;" />
            </a>
          </div>
        </div>
      </div>
    `,
  },
};
