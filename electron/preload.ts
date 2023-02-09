import { contextBridge } from "electron";

contextBridge.exposeInMainWorld('versions', {
    node: () => process.versions.node
});
