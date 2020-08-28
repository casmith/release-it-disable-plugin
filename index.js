'use strict';

const Plugin = require('release-it/lib/plugin/Plugin');

class DisablePlugin extends Plugin {

    disablePlugin() {
        const pluginName = this.getContext().pluginName;
        if (!pluginName) {
            this.log.warn("pluginName is required for release-it-disable-plugin");
        } 
        return pluginName;
    }
}

module.exports = DisablePlugin;
