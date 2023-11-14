/**
 * This file was automatically generated by Strapi.
 * Any modifications made will be discarded.
 */
import ckeditor from "@ckeditor/strapi-plugin-ckeditor/strapi-admin";
import tinymce from "@sklinet/strapi-plugin-tinymce/strapi-admin";
import strapiCloud from "@strapi/plugin-cloud/strapi-admin";
import i18N from "@strapi/plugin-i18n/strapi-admin";
import usersPermissions from "@strapi/plugin-users-permissions/strapi-admin";
import previewButton from "strapi-plugin-preview-button/strapi-admin";
import { renderAdmin } from "@strapi/strapi/admin";

renderAdmin(document.getElementById("strapi"), {
  plugins: {
    ckeditor: ckeditor,
    tinymce: tinymce,
    "strapi-cloud": strapiCloud,
    i18n: i18N,
    "users-permissions": usersPermissions,
    "preview-button": previewButton,
  },
});
