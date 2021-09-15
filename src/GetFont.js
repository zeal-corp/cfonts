/***************************************************************************************************************************************************************
 *
 * cfonts
 *
 * Sexy fonts for the console. (CLI output)
 *
 * @license     https://github.com/dominikwilkowski/cfonts/blob/released/LICENSE  GNU GPLv2
 * @author      Dominik Wilkowski  hi@dominik-wilkowski.com
 * @repository  https://github.com/dominikwilkowski/cfonts
 *
 * GetFont
 *   Get a selected JSON font-file object
 *
 **************************************************************************************************************************************************************/

"use strict";

const { Debugging } = require("./Debugging.js");
const d3 = require(`../fonts/3d.json`);
const block = require(`../fonts/block.json`);
const chrome = require(`../fonts/chrome.json`);
const grid = require(`../fonts/grid.json`);
const huge = require(`../fonts/huge.json`);
const pallet = require(`../fonts/pallet.json`);
const shade = require(`../fonts/shade.json`);
const simple = require(`../fonts/simple.json`);
const simple3d = require(`../fonts/simple3d.json`);
const simpleBlock = require(`../fonts/simpleBlock.json`);
const slick = require(`../fonts/slick.json`);
const tiny = require(`../fonts/tiny.json`);

const FONT_HOLSTER = { "3d": d3, block, chrome, grid, huge, pallet, shade, simple, simple3d, simpleBlock, slick, tiny };

/**
 * Get a selected JSON font-file object
 *
 * @param  {string} font - The name of the font to be returned
 *
 * @return {object}      - The font object of that file
 */
const GetFont = (font) => {
	Debugging.report(`Running GetFont`, 1);

	// try loading the font file
	try {
		let FONTFACE = FONT_HOLSTER[font]; // read font file
		Debugging.report(`GetFont: Fontface path selected: "${font}.json"`, 2);
		if (!FONTFACE) return false;
		return FONTFACE;
	} catch (error) {
		Debugging.error(`Font file for "${font}" errored out: ${error}`, 2);

		return false;
	}
};

module.exports = exports = {
	GetFont,
};
