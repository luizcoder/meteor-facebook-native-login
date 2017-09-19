import { Meteor } from "meteor/meteor"
import loginWithNativeFacebook from "./loginWithNativeFacebook"

const NativeLogin = {};

NativeLogin.loginWithNativeFacebook = loginWithNativeFacebook;

export {facebookConnectPlugin, NativeLogin};
