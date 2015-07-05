'use strict';

module.exports = ( function ( hasColors ) {
	var colors = hasColors ? {
		R     : '\x1b[38;5;124m',
		G     : '\x1b[38;5;78m',
		B     : '\x1b[38;5;32m',
		RESET : '\x1b[0m'
	} : { R: '', G: '', B: '', RESET: '' };

	return [
		'          Ro88o',
		'         R888888',
		'    Bo.   R888888   B.o',
		'  B.dWW\' G_ R"88" G_ B\'WWb.',
		'  BWWW  GdMo.  G.oMb  BWWW',
		'  BWW  GMMMMM  GMMMMM  BWW',
		'  BWW  GMMMMM  GMMMMM  BWW',
		'  BWWW  GqMMM  GMMMp  BWWW',
		'  B\'WWW  G"MM  GMM"  BWWW\'',
		'    B"WWWo.    B.oWWW"',
		'      B""WWWWWWWW""'
	].join( '\n' ).replace( /([RGB])(\S+)/g, function ( _, color, txt ) {
		return colors[ color ] + txt + colors.RESET;
	} );

} ( process.stdout.isTTY && /color/.test( process.env.TERM ) ) );
