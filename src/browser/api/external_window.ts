import { Bounds } from '../../../js-adapter/src/shapes';
import { BrowserWindow } from 'electron';
import { ExternalWindowIdentity } from '../../../js-adapter/src/identity';
import * as NativeWindow from './native_window';
import * as Shapes from '../../shapes';
import ofEvents from '../of_events';
import route from '../../common/route';

const registeredExternalWindows = new Map<string, BrowserWindow>();

export function addEventListener(identity: Shapes.Identity, type: string, listener: Shapes.Listener) {
  const evt = route.externalWindow(type, identity.uuid);
  ofEvents.on(evt, listener);
  return () => ofEvents.removeListener(evt, listener);
}

export function animateExternalWindow(identity: ExternalWindowIdentity) {
  const externalWindow = getExternalWindow(identity);
  NativeWindow.noop(externalWindow);
}

export function bringExternalWindowToFront(identity: ExternalWindowIdentity) {
  const externalWindow = getExternalWindow(identity);
  NativeWindow.bringToFront(externalWindow);
}

export function closeExternalWindow(identity: ExternalWindowIdentity) {
  const externalWindow = getExternalWindow(identity);
  NativeWindow.close(externalWindow);
}

export function disableExternalWindowFrame(identity: ExternalWindowIdentity) {
  const externalWindow = getExternalWindow(identity);
  NativeWindow.noop(externalWindow);
}

export function enableExternaWindowFrame(identity: ExternalWindowIdentity) {
  const externalWindow = getExternalWindow(identity);
  NativeWindow.noop(externalWindow);
}

export function flashExternalWindow(identity: ExternalWindowIdentity) {
  const externalWindow = getExternalWindow(identity);
  NativeWindow.flash(externalWindow);
}

export function focusExternalWindow(identity: ExternalWindowIdentity) {
  const externalWindow = getExternalWindow(identity);
  NativeWindow.focus(externalWindow);
}

export function getExternalWindowBounds(identity: ExternalWindowIdentity) {
  const externalWindow = getExternalWindow(identity);
  return NativeWindow.getBounds(externalWindow);
}

export function getExternalWindowGroup(identity: ExternalWindowIdentity) {
  const externalWindow = getExternalWindow(identity);
  NativeWindow.noop(externalWindow);
}

export function getExternalWindowOptions(identity: ExternalWindowIdentity) {
  const externalWindow = getExternalWindow(identity);
  NativeWindow.noop(externalWindow);
}

export function getExternalWindowState(identity: ExternalWindowIdentity) {
  const externalWindow = getExternalWindow(identity);
  return NativeWindow.getState(externalWindow);
}

export function hideExternalWindow(identity: ExternalWindowIdentity) {
  const externalWindow = getExternalWindow(identity);
  NativeWindow.hide(externalWindow);
}

export function isExternalWindowShowing(identity: ExternalWindowIdentity) {
  const externalWindow = getExternalWindow(identity);
  return NativeWindow.isVisible(externalWindow);
}

export function joinExternalWindowGroup(identity: ExternalWindowIdentity) {
  const externalWindow = getExternalWindow(identity);
  NativeWindow.noop(externalWindow);
}

export function leaveExternalWindowGroup(identity: ExternalWindowIdentity) {
  const externalWindow = getExternalWindow(identity);
  NativeWindow.noop(externalWindow);
}

export function maximizeExternalWindow(identity: ExternalWindowIdentity) {
  const externalWindow = getExternalWindow(identity);
  NativeWindow.maximize(externalWindow);
}

export function mergeExternalWindowGroups(identity: ExternalWindowIdentity) {
  const externalWindow = getExternalWindow(identity);
  NativeWindow.noop(externalWindow);
}

export function minimizeExternalWindow(identity: ExternalWindowIdentity) {
  const externalWindow = getExternalWindow(identity);
  NativeWindow.minimize(externalWindow);
}

export function moveExternalWindowBy(identity: ExternalWindowIdentity, payload: Shapes.MoveWindowByOpts) {
  const externalWindow = getExternalWindow(identity);
  NativeWindow.moveBy(externalWindow, payload);
}

export function moveExternalWindow(identity: ExternalWindowIdentity, payload: Shapes.MoveWindowToOpts) {
  const externalWindow = getExternalWindow(identity);
  NativeWindow.moveTo(externalWindow, payload);
}

export function resizeExternalWindowBy(identity: ExternalWindowIdentity, payload: Shapes.ResizeWindowByOpts) {
  const externalWindow = getExternalWindow(identity);
  NativeWindow.resizeBy(externalWindow, payload);
}

export function resizeExternalWindowTo(identity: ExternalWindowIdentity, payload: Shapes.ResizeWindowToOpts) {
  const externalWindow = getExternalWindow(identity);
  NativeWindow.resizeTo(externalWindow, payload);
}

export function restoreExternalWindow(identity: ExternalWindowIdentity) {
  const externalWindow = getExternalWindow(identity);
  NativeWindow.restore(externalWindow);
}

export function setExternalWindowAsForeground(identity: ExternalWindowIdentity) {
  const externalWindow = getExternalWindow(identity);
  NativeWindow.setAsForeground(externalWindow);
}

export function setExternalWindowBounds(identity: ExternalWindowIdentity, payload: Bounds) {
  const externalWindow = getExternalWindow(identity);
  NativeWindow.setBounds(externalWindow, payload);
}

export function showExternalWindow(identity: ExternalWindowIdentity) {
  const externalWindow = getExternalWindow(identity);
  NativeWindow.show(externalWindow);
}

export function showExternalWindowAt(identity: ExternalWindowIdentity, payload: Shapes.ShowWindowAtOpts) {
  const externalWindow = getExternalWindow(identity);
  NativeWindow.showAt(externalWindow, payload);
}

export function stopFlashExternalWindow(identity: ExternalWindowIdentity) {
  const externalWindow = getExternalWindow(identity);
  NativeWindow.noop(externalWindow);
}

function getExternalWindow(identity: ExternalWindowIdentity) {
  const { nativeId } = identity;
  let externalWindow = registeredExternalWindows.get(nativeId);

  if (!externalWindow) {
    externalWindow = new BrowserWindow({ hwnd: nativeId });
    // TODO: add externalWindow destruction
    registeredExternalWindows.set(nativeId, externalWindow);
  }

  return externalWindow;
}