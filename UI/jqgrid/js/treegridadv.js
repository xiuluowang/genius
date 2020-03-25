$(document).ready(function(){
	jQuery("#treegrid2").jqGrid({
	   	url: 'http://www.trirand.com/blog/jqgrid/server.php?q=tree3',
		//url: 'http://192.168.1.143:7777/treegrid/tasklist.action',
		treedatatype: "xml",
		mtype: "GET",
	   	colNames:["id","Account","Acc Num", "Debit", "Credit","Balance","level","parent_id","isLeaf","expanded"],
	   	colModel:[
	   		{name:'id',index:'id', width:1,hidden:true,key:true},
	   		{name:'name1',index:'name', width:400},
	   		{name:'num',index:'acc_num', width:100, align:"center"},
	   		{name:'debit',index:'debit', width:100, align:"right"},		
	   		{name:'credit',index:'credit', width:100,align:"right"},		
	   		{name:'balance',index:'balance', width:100,align:"right"},
	   		{name:'level',index:'level', width:100},
	   		{name:'parent_id',index:'parent_id', width:100},
	   		{name:'isLeaf',index:'isLeaf', width:100},
	   		{name:'expanded',index:'expanded', width:100}
			//{name:'enbl', index:'enbl', width: 60, align:'center', formatter:'checkbox', editoptions:{value:'1:0'}, formatoptions:{disabled:false}}
	   	],
	   	treeReader:{level_field: "level",parent_id_field: "parent_id",leaf_field: "isLeaf",expanded_field: "expanded"},
		height:'600px',
		pager : "#ptreegrid2",
	    treeGrid: true,
		ExpandColumn : 'name1',
		caption: "treegrid demo list",
		treeGridModel: 'adjacency'
	});
	var ci,rowid,ptr,td;
	$('#treegrid2').contextMenu('myMenu1', {
		bindings: {
			'newTask':function(t){
				alert("添加任务");
			},
			'deleteTask':function(t){
				//alert("删除任务");			
				if(ptr && rowid && ci >=1) {
					$('#treegrid2').jqGrid('delTreeNode',rowid,false);
					ptr = rowid=ci=null;
				}
			},
			'updateTask':function(t){
				alert("更新任务");
			}
		},
		onContextMenu: function(e, menu) {
			td = e.target || e.srcElement;
			ptr = $(td).parents("tr.jqgrow")[0];
			ci = !$(td).is('td') ? $(td).parents("td:first")[0].cellIndex : td.cellIndex;
			if($.browser.msie) {
				ci = $.jgrid.getCellIndex(td);
			}
			if( ci >=1 ) {
				rowid = ptr.id;
				$('#treegrid2').jqGrid('setSelection',rowid,false);
				return true;
			} else {
				//alert(ptr.id+" : "+ptr.rowIndex+" : "+ci);
				return false;
			}
		}
	});
	$("#jqContextMenu").addClass("ui-widget ui-widget-content").css("font-size","12px");
});



	