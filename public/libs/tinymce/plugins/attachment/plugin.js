 /**
 * attachment (Enhancement 1.5v) 2021-01-13
 * 
 * 
 * https://github.com/Five-great/tinymce-plugins
 * 
 * Copyright 2021, Five(Li Hailong) The Chengdu, China https://www.fivecc.cn/
 *
 * Licensed under MIT
 */
!function() {
	"use strict";
	var Qeider = null;

	function d(e, t) {
		if (void 0 === t && (t = 2), 0 === e) return "0 B";
		var n = t < 0 ? 0 : t,
			i = Math.floor(Math.log(e) / Math.log(1024));
		return parseFloat((e / Math.pow(1024, i)).toFixed(n)) + " " + ["B", "K", "M", "G", "T", "P", "E", "Z", "Y"][i]
	}
	function i(o) {
		o.focus(), e(function(e) {
			for (var t = 0, n = e; t < n.length; t++) {
				var i = n[t];
				r(o, i, function(e, t) {
					var n = "span#" + e;
					0 < o.dom.select(n).length ? o.dom.replace(t, e) : o.selection.setContent(t.outerHTML)
				})
			}
		})
	}
	function n(e) {
		var t = document.createElement("a");
		t.target = "_blank", t.href = e, t.rel = "noreferrer noopener";
		var n, i, o = document.createEvent("MouseEvents");
		o.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), n = t, i = o, document.body.appendChild(n), n.dispatchEvent(i), document.body.removeChild(n)
	}
	function o(t) {
		Qeider = t;
		t.ui.registry.getAll().icons.attachment || t.ui.registry.addIcon("attachment", '<svg width="20" height="20"><path d="M16.3 9.3a.8.8 0 00-1 0l-5.5 5.4a2.8 2.8 0 01-4.3-.4v-.1l-.2-.3-.1-.2a3 3 0 01-.2-.6V13c0-.9.2-1.7.8-2.2L11.7 5c.6-.7 1.6-.7 2.3 0a1.6 1.6 0 010 2.2L8 13a.4.4 0 01-.7-.3v-.3L12.2 8c.3-.3.3-.8 0-1a.8.8 0 00-1 0l-4.7 4.5a1.9 1.9 0 000 2.7c.8.7 2 .7 2.8 0L15 8.3a3 3 0 000-4.4 3.1 3.1 0 00-4.4 0L4.8 9.7a4.2 4.2 0 000 6 4.3 4.3 0 006 0l5.5-5.3.2-.6c0-.2 0-.4-.2-.5" fill-rule="evenodd"/></svg>'), t.ui.registry.addButton("attachment", {
			icon: "attachment",
			tooltip: "插入附件",
			onAction: function() {
				return i(t)
			}
		}), t.ui.registry.addMenuItem("attachment", {
			icon: "attachment",
			text: "插入附件",
			onAction: function() {
				return i(t)
			}
		}), t.ui.registry.addButton("attachment-download", {
			text: "下载",
			onAction: function() {
				return e = function(e) {
					for (var t = 0, n = e.selection.getNode().children; t < n.length; t++) {
						var i = n[t];
						if (i.hasAttribute("href")) return i.getAttribute("href")
					}
					return "#"
				}(t), void n(e);
				var e
			}
		}), t.ui.registry.addContextToolbar("attachment", {
			predicate: function(e) {
				return !!a(t, e)
			},
			items: "attachment-download",
			position: "node",
			scope: "node"
		})
	}

	var global$1 = tinymce.util.Tools.resolve('tinymce.util.Promise');
	var global$2 = tinymce.util.Tools.resolve('tinymce.Env');
	var global$3 = tinymce.util.Tools.resolve('tinymce.util.Delay');
	var pickFile = function(a) {
			return new global$1(function(e) {
				var c = document.createElement("input");
				c.type = "file";
				c.style.position = "fixed";
				c.style.left = "0";
				c.style.top = "0";
				c.style.opacity = "0.001";
				document.body.appendChild(c);
				var b = function(f) {
						e(Array.prototype.slice.call(f.target.files))
					};
				c.addEventListener("change", b);
				var d = function(g) {
						var f = function() {
								e([]);
								c.parentNode.removeChild(c)
							};
						if (global$2.os.isAndroid() && g.type !== "remove") {
							global$3.setEditorTimeout(a, f, 0)
						} else {
							f()
						}
						a.off("focusin remove", d)
					};
				a.on("focusin remove", d);
				c.click()
			})
		};
	var e = function(n) {
			var e = document.createElement("input");
			e.setAttribute("type", "file"), e.setAttribute("accept", "*/*"), e.setAttribute("multiple", "multiple"), e.onchange = function(e) {
				var t = e.target.files;
				null != n && n(t)
			}, e.click()
		},
		
		r = function(a, t, n) {
			var e, i, o, c, r, l, p, _, f, s = a.getParam("attachment_max_size") || 209715200;
		
			t.size > s ? (e = d(s), a.notificationManager.open({
				text: "附件最大支持 " + e + "，超过 " + e + " 的附件将不会被上传。",
				type: "warning",
				timeout: 5e3
			})) : (i = a.getParam("attachment_upload_handler"), o = a.getParam('attachment_icons_path','./plugins/attachment/icons'), c = a.dom.uniqueId(), r = "attachment_" + c, l = d(t.size), p = o + "/" +
			function(e) {
				if (e) {
					var t = e.lastIndexOf(".");
					if (-1 === t) return "default_file.svg";
					for (var n = e.substr(t + 1).toLowerCase(), i = 0, o = [{
						ext: "txt",
						icon: "file_type_text"
					}, {
						ext: "doc",
						icon: "file_type_word2"
					}, {
						ext: "docx",
						icon: "file_type_word2"
					}, {
						ext: "pdf",
						icon: "file_type_pdf2"
					}, {
						ext: "xls",
						icon: "file_type_excel2"
					}, {
						ext: "xlsx",
						icon: "file_type_excel2"
					}, {
						ext: "ppt",
						icon: "file_type_powerpoint2"
					}, {
						ext: "pptx",
						icon: "file_type_powerpoint2"
					}, {
						ext: "ai",
						icon: "file_type_ai2"
					}, {
						ext: "psd",
						icon: "file_type_photoshop2"
					}, {
						ext: "zip",
						icon: "file_type_zip"
					}, {
						ext: "rar",
						icon: "file_type_zip"
					}, {
						ext: "jpg",
						icon: "file_type_image"
					}, {
						ext: "jpeg",
						icon: "file_type_image"
					}, {
						ext: "png",
						icon: "file_type_image"
					}, {
						ext: "gif",
						icon: "file_type_image"
					}, {
						ext: "js",
						icon: "file_type_js"
					}, {
						ext: "xml",
						icon: "file_type_xml"
					}, {
						ext: "htm",
						icon: "file_type_html"
					}, {
						ext: "html",
						icon: "file_type_html"
					}, {
						ext: "json",
						icon: "file_type_light_json"
					}, {
						ext: "fon",
						icon: "file_type_light_font"
					}, {
						ext: "font",
						icon: "file_type_light_font"
					}, {
						ext: "svg",
						icon: "file_type_image"
					}, {
						ext: "exe",
						icon: "file_type_binary"
					}, {
						ext: "bin",
						icon: "file_type_binary"
					}, {
						ext: "dll",
						icon: "file_type_binary"
					}, {
						ext: "pkg",
						icon: "file_type_package"
					}, {
						ext: "wav",
						icon: "file_type_audio"
					}, {
						ext: "mp3",
						icon: "file_type_audio"
					}, {
						ext: "mp4",
						icon: "file_type_video"
					}, {
						ext: "mov",
						icon: "file_type_video"
					}, {
						ext: "avi",
						icon: "file_type_video"
					}, {
						ext: "java",
						icon: "file_type_java"
					}, {
						ext: "cs",
						icon: "file_type_csharp"
					}, {
						ext: "css",
						icon: "file_type_css"
					}, {
						ext: "py",
						icon: "file_type_python"
					}, {
						ext: "sln",
						icon: "file_type_vscode3"
					}, {
						ext: "go",
						icon: "file_type_go"
					}, {
						ext: "7z",
						icon: "file_type_zip"
					}, {
						ext: "sketch",
						icon: "file_type_sketch"
					}, {
						ext: "patch",
						icon: "file_type_patch"
					}, {
						ext: "org",
						icon: "file_type_org"
					}, {
						ext: "md",
						icon: "file_type_markdown"
					}, {
						ext: "jar",
						icon: "file_type_jar"
					}, {
						ext: "dmg",
						icon: "file_type_dmg"
					}, {
						ext: "accdb",
						icon: "file_type_access"
					}, {
						ext: "apk",
						icon: "file_type_apk"
					}, {
						ext: "eps",
						icon: "file_type_eps"
					}, {
						ext: "ico",
						icon: "file_type_ico"
					}, {
						ext: "iso",
						icon: "file_type_iso"
					}, {
						ext: "key",
						icon: "file_type_keynote"
					}, {
						ext: "numbers",
						icon: "file_type_number"
					}, {
						ext: "reg",
						icon: "file_type_reg"
					}, {
						ext: "rp",
						icon: "file_type_rp"
					}, {
						ext: "rtf",
						icon: "file_type_rtf"
					}, {
						ext: "sketch",
						icon: "file_type_sketch"
					}, {
						ext: "swf",
						icon: "file_type_swf"
					}, {
						ext: "url",
						icon: "file_type_url"
					}, {
						ext: "wma",
						icon: "file_type_wma"
					}, {
						ext: "xmind",
						icon: "file_type_xmind"
					}, {
						ext: "cat",
						icon: "file_type_cat"
					}]; i < o.length; i++) {
						var a = o[i];
						if (a.ext === n) return a.icon + ".svg"
					}
				}
				return "default_file.svg"
			}(t.name), _ = o + "/error.png", f = function(e, t) {
				var n = document.createElement("img");
				n.setAttribute("src", t.icon);
				n.setAttribute("width", '30px');
				var i = document.createElement("span");
				i.setAttribute("id", "progress_" + t.id), i.innerText = "0%";
				var o = document.createElement("span");
				o.innerText = t.title + " (" + t.size + ")";
				var a = e.dom.create("span", {
					id: "attachment_" + t.id,
					class: "attachment upload_progress"
				});
				return a.appendChild(n), a.appendChild(i), a.appendChild(o), a.contentEditable = "false", a
			}(a, {
				id: c,
				icon: o + "/loading.gif",
				title: t.name,
				size: l
			}), n(r, f), i(t, function(e) {
				f = function(e, t) {
					var n = document.createElement("img");
					n.setAttribute("src", t.icon);
					n.setAttribute("width", '30px');
					var i = document.createElement("a");
					i.innerText = t.title + " (" + t.size + ")", i.setAttribute("href", t.src);
					var o = e.dom.create("span", {
						id: "attachment_" + t.id,
						class: "attachment"
					});
					return o.appendChild(n), o.appendChild(i), o.contentEditable = "false", o
				}(a, {
					id: c,
					icon: p,
					title: t.name,
					size: l,
					src: e
				}), n(r, f)
			}, function(e) {
				f = function(e, t) {
					var n = document.createElement("img");
					n.setAttribute("src", t.icon);
					n.setAttribute("width", "30px");
					var i = document.createElement("span");
					i.innerText = t.message + " - " + t.title + " (" + t.size + ")";
					var o = e.dom.create("span", {
						class: "attachment upload_error"
					});
					return o.appendChild(n), o.appendChild(i), o.contentEditable = "false", o
				}(a, {
					icon: _,
					title: t.name,
					size: l,
					message: e
				}), n(r, f)
			}, function(e) {
				var t, n, i, o;
				n = c, i = e, o = (t = a).dom.select("span#progress_" + n), t.dom.setHTML(o, i)
			}))
		},
		a = function(e, t) {
			return t = t || e.selection.getNode(), e.dom.getParent(t, 'span[class="attachment"]')
		};
	tinymce.PluginManager.add("attachment", function(e, t) {
		// console.log(e)
		e.__proto__.getContent = function (_g) {
			return function () {
			 return	arguments&&arguments.length==0?'<style>'+e.getParam("attachment_style",'.attachment>img{display:inline-block!important;max-width:30px!important;}.attachment>a{display:contents!important;}','string')+'</style>' + _g.apply(this, arguments).replace(/<style>([\S\s\t]*?)<\/style>/gi,''): _g.apply(this, arguments);
			}
		}(e.__proto__.getContent);
		var n, c;
		o(e), (n = e).addCommand("mceAttachment", function() {
			i(n)
		}), (c = e).on("drop", function(e) {
			var t = e.dataTransfer;
			if (null != t) {
				var n = t.files;
				if (null != n) for (var i = 0, o = n; i < o.length; i++) {
					var a = o[i];
					(function(e) {
						var t = e.lastIndexOf(".");
						if (-1 === t) return !1;
						var n = e.substr(t);
						return /.(gif|jpe?g|png)$/i.test(n)
					})(a.name) || r(c, a, function(e, t) {
						var n = "span#" + e;
						0 < c.dom.select(n).length ? c.dom.replace(t, e) : c.selection.setContent(t.outerHTML)
					})
				}
			}
		})
  })
  return {
		getMetadata: function() {
			return  {
				name: pluginName,
				url: "https://github.com/Five-great/tinymce-plugins",
			};
		}
	};
}();