import { getHostnames } from "./hostnames.js";
export { hostnames } from "./hostnames.js";

/**
 * This checks an email address to know if it is a temporary/ spam email address
 * @param email is the email address to check
 * @returns true if it is a temporary email address, else false
 */
export function isTempMail(mail) {
  console.log({ mail });
  return getHostnames().some(m => mail.endsWith(`@${m}`))
}