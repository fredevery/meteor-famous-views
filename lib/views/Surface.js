FView.ready(function(require) {
	FView.registerView('Surface', famous.core.Surface, {

    attrUpdate: function(key, value, data, firstTime) {
    	switch(key) {
    		case 'size':
    			// Let our modifier control our size
    			// Long term, rather specify modifierSize and surfaceSize args?
    			if (this._modifier.name == 'StateModifier') {
						if (this.surface.getSize()[0] !== undefined)
							this.surface.setSize([undefined,undefined]);    				
    			} else {
  					this.surface.setSize(value);
    			}
    			break;
    	}
    }

	});
});