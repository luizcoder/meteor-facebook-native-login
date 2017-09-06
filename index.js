import { Meteor } from "meteor/meteor"
import loginWithNativeFacebook from "./loginWithNativeFacebook"

var NativeLogin = {};
NativeLogin.loginWithNativeFacebook = loginWithNativeFacebook;

export {facebookConnectPlugin};
