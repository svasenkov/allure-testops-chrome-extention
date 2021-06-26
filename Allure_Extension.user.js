// ==UserScript==
// @name Allure Extension
// @version 0.07
// @description Extension for allure.autotests.cloud
// @author T. Starchenkov
// @updateURL https://starchenkov.pro/allure_ext/Allure_Extension.user.js
// @namespace allure.autotests.cloud
// @match https://allure.autotests.cloud/*
// @require http://code.jquery.com/jquery-latest.js
// @resource html https://starchenkov.pro/allure_ext/12.html
// @resource style https://starchenkov.pro/allure_ext/20.css
// @grant GM_addStyle
// @grant GM_getResourceText
// ==/UserScript==

(function() {
	'use strict';
	GM_addStyle(GM_getResourceText("style"));
})();



jQuery(document).ready(function() {
	$('body').attr('id', 'extension_active');
	$('#extension_active').removeClass('modal-show');
	$('body').append(
		'<script>function showModal() {document.getElementById("extension_active").classList.add("modal-show")}</script>');
	$('#modal_toggle_btn').on('click', function() {
		$('#extension_active').addClass('modal-show');
	});
});

var ids = [];

$(document).on("click", ".LoadableTreeControlPanel button", function() {
	$('#modal_toggle_btn').remove();
	$('.tippy-tooltip .tippy-content>div').prepend(
		'<div class="Menu__item" id="modal_toggle_btn" onclick="showModal()"><svg class="Icon_size_normal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71 71"><defs><style>.cls-1{fill:var(--text1);}</style></defs><path class="cls-1" d="M33.55,42.47h6l2.07,5.45h0v0h9.64L39.26,18.58H30.69l-12,29.36h9.26l2.14-5.46Zm1.27-13.65,2.12,6.92H32.65Z"/><path class="cls-1" d="M11.62,35.45A23.63,23.63,0,0,1,40.84,12.53s2-4.85,2-4.85L41.22.79a1,1,0,0,0-1-.79h-9.5a1,1,0,0,0-1,.78l-1.6,6.88a29,29,0,0,0-7.15,3L15,6.89A1,1,0,0,0,13.76,7L7.05,13.75A1,1,0,0,0,6.9,15l3.74,6a28.49,28.49,0,0,0-3,7.15L.79,29.75a1,1,0,0,0-.79,1v9.5a1,1,0,0,0,.79,1l6.89,1.6a28.8,28.8,0,0,0,3,7.15L6.9,56a1,1,0,0,0,.15,1.25l6.71,6.71a1,1,0,0,0,1.26.14l6-3.73s2-4.68,2-4.68A23.57,23.57,0,0,1,11.62,35.45Z"/><path class="cls-1" d="M70.19,29.76l-6.88-1.59a29.1,29.1,0,0,0-3-7.16l3.73-6a1,1,0,0,0-.14-1.24L57.22,7.06A1,1,0,0,0,56,6.92l-6,3.73s-2.18,4.9-2.18,4.9A23.59,23.59,0,0,1,35.18,59.09l-5-.49-2,4.84,1.57,6.77a1,1,0,0,0,1,.79h9.5a1,1,0,0,0,1-.79l1.59-6.89a28.71,28.71,0,0,0,7.16-3l6,3.74A1,1,0,0,0,57.22,64l6.72-6.71A1,1,0,0,0,64.08,56l-3.73-6a29.1,29.1,0,0,0,3-7.16l6.88-1.59a1,1,0,0,0,.8-1V30.74A1,1,0,0,0,70.19,29.76Z"/></svg>&nbsp;Бла-бла-бла</div>');

	$('#allure_ext_modal').remove();
	$(".TestCaseTreeContainer").prepend(GM_getResourceText("html"));
	$('#allure_ext_modal .close-btn, .ProjectLayout__sider').on('click', function() {
		$('#extension_active').removeClass('modal-show');
	});
	$('#allure_ext_modal .Button_style_success').on('click', function() {
		console.log(ids);
	});
});


jQuery(document).ready(function() {
	$(".LoadableTreeNodeView .Checkbox__custom-input").click(function() {
		targetId = $(this).parent().parent().parent().find('.TreeNodeId').text();
		if (!$(this).hasClass('Checkbox__custom-input_highlighted')) {
			var add = '_add';
			ids.push(targetId + add);
		} else {
			var del = '_del';
			ids.push(targetId + del);
		}
		console.log(ids);
	});
});
