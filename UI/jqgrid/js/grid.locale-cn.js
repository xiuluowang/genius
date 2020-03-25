(function(a) {
	a.jgrid = {
		defaults : {
			recordtext : "��ǰ��ʾ:��{0}��-��{1}��-����{2}��",
			emptyrecords : "û�з�������������",
			loadtext : "���ڼ�������,���Ժ�...",
			pgtext : " ��{0}ҳ \u3000��{1}ҳ"
		},
		search : {
			caption : "����...",
			Find : "����",
			Reset : "����",
			odata : [ "����\u3000\u3000", "����\u3000\u3000", "С��\u3000\u3000",
					"С�ڵ���", "����\u3000\u3000", "���ڵ���", "��ʼ��", "����ʼ��",
					"����\u3000\u3000", "������", "������", "��������", "����\u3000\u3000",
					"������" ],
			groupOps : [ {
				op : "AND",
				text : "����"
			}, {
				op : "OR",
				text : "��һ"
			} ],
			matchText : " ƥ��",
			rulesText : " ����"
		},
		edit : {
			addCaption : "��Ӽ�¼",
			editCaption : "�༭��¼",
			bSubmit : "�ύ",
			bCancel : "ȡ��",
			bClose : "�ر�",
			saveData : "�����Ѹı䣬�Ƿ񱣴棿",
			bYes : "��",
			bNo : "��",
			bExit : "ȡ��",
			msg : {
				required : "���ֶα���",
				number : "��������Ч����",
				minValue : "��ֵ������ڵ��� ",
				maxValue : "��ֵ����С�ڵ��� ",
				email : "�ⲻ����Ч��e-mail��ַ",
				integer : "��������Ч����",
				date : "��������Чʱ��",
				url : "��Ч��ַ��ǰ׺����Ϊ ('http://' �� 'https://')",
				nodefined : " δ���壡",
				novalue : " ��Ҫ����ֵ��",
				customarray : "�Զ��庯����Ҫ�������飡",
				customfcheck : "Custom function should be present in case of custom checking!"
			}
		},
		view : {
			caption : "�鿴��¼",
			bClose : "�ر�"
		},
		del : {
			caption : "ɾ��",
			msg : "ɾ����ѡ��¼��",
			bSubmit : "ɾ��",
			bCancel : "ȡ��"
		},
		nav : {
			edittext : "",
			edittitle : "�༭��ѡ��¼",
			addtext : "",
			addtitle : "����¼�¼",
			deltext : "",
			deltitle : "ɾ����ѡ��¼",
			searchtext : "",
			searchtitle : "����",
			refreshtext : "",
			refreshtitle : "ˢ�±��",
			alertcap : "ע��",
			alerttext : "��ѡ���¼",
			viewtext : "",
			viewtitle : "�鿴��ѡ��¼"
		},
		col : {
			caption : "ѡ����",
			bSubmit : "ȷ��",
			bCancel : "ȡ��"
		},
		errors : {
			errcap : "����",
			nourl : "û������url",
			norecords : "û��Ҫ����ļ�¼",
			model : "colNames �� colModel ���Ȳ��ȣ�"
		},
		formatter : {
			integer : {
				thousandsSeparator : " ",
				defaultValue : "0"
			},
			number : {
				decimalSeparator : ".",
				thousandsSeparator : " ",
				decimalPlaces : 2,
				defaultValue : "0.00"
			},
			currency : {
				decimalSeparator : ".",
				thousandsSeparator : " ",
				decimalPlaces : 2,
				prefix : "",
				suffix : "",
				defaultValue : "0.00"
			},
			date : {
				dayNames : [ "Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat",
						"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
						"Friday", "Saturday" ],
				monthNames : [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
						"Aug", "Sep", "Oct", "Nov", "Dec", "January",
						"February", "March", "April", "May", "June", "July",
						"August", "September", "October", "November",
						"December" ],
				AmPm : [ "am", "pm", "AM", "PM" ],
				S : function(b) {
					return b < 11 || b > 13 ? [ "st", "nd", "rd", "th" ][Math
							.min((b - 1) % 10, 3)] : "th"
				},
				srcformat : "Y-m-d",
				newformat : "m-d-Y",
				masks : {
					ISO8601Long : "Y-m-d H:i:s",
					ISO8601Short : "Y-m-d",
					ShortDate : "Y/j/n",
					LongDate : "l, F d, Y",
					FullDateTime : "l, F d, Y g:i:s A",
					MonthDay : "F d",
					ShortTime : "g:i A",
					LongTime : "g:i:s A",
					SortableDateTime : "Y-m-d\\TH:i:s",
					UniversalSortableDateTime : "Y-m-d H:i:sO",
					YearMonth : "F, Y"
				},
				reformatAfterEdit : false
			},
			baseLinkUrl : "",
			showAction : "",
			target : "",
			checkbox : {
				disabled : true
			},
			idName : "id"
		}
	}
})(jQuery);