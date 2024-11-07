export const historyDataListV1 = [
    {
        "url": "/api-general/query/v1/cksc",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "销售出库回传",
        "serviceCode": "ckscjk",
        "shareDesc": "销售出库回传",
        "apiDocTypeId": 32,
        "description": "从九州通获取销售出库订单的出库记录数据",
        "apiDesc": "从九州通获取销售出库订单的出库记录数据",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "func_type",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "select",
                "example": "select",
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "cksc",
                "paramLocation": "body",
                "isNeed": "否",
                "description": null,
                "example": null,
                "children": [
                    {
                        "paramName": "Businessbill_No",
                        "paramType": "string(100)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "业务单据编号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Operator_Id",
                        "paramType": "string(32)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "运营商ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Con_Id",
                        "paramType": "string(32)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "委托方ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Sale_Type",
                        "paramType": "string(2)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "销售类型",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Invoice_Staff",
                        "paramType": "string(32)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "开票员",
                        "example": null,
                        "children": null
                    }
                ]
            }
        ],
        "responseParamList": [
            {
                "statusCode": "200",
                "paramName": null,
                "paramType": "ckscResponse",
                "description": "销售出库回传成功",
                "children": [
                    {
                        "statusCode": null,
                        "paramName": "Biz_Bill_No",
                        "paramType": "string(30)",
                        "description": "业务单据编号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Production_Date",
                        "paramType": "date",
                        "description": "生产日期",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Rp_Reasons",
                        "paramType": "string(3)",
                        "description": "退货原因",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Outnbound_Quantity",
                        "paramType": "decimal(14,5)",
                        "description": "出库数量",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Instorebill_No",
                        "paramType": "string(30)",
                        "description": "购进入库单号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Rp_Cate",
                        "paramType": "string(2)",
                        "description": "退货类别\n1：合格\n2：不合格\n3：不限定\n4：停售",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Bill_Dtl_Id_jzyc",
                        "paramType": "string(32)",
                        "description": "九州云仓ID\n唯一键",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Businessman",
                        "paramType": "string(40)",
                        "description": "业务员",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Invoice_Time",
                        "paramType": "dateTime",
                        "description": "开票时间",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Goods_Value",
                        "paramType": "decimal(14,2)",
                        "description": "商品价值",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Original_Bill_No",
                        "paramType": "string(40)",
                        "description": "合同单号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Valid_Until",
                        "paramType": "date",
                        "description": "有效期",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Outbaddress_Id",
                        "paramType": "string(32)",
                        "description": "出库地址ID",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Aging",
                        "paramType": "string(15)",
                        "description": "时效",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Virtual_Storehouse_No",
                        "paramType": "string(20)",
                        "description": "仓库编号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Is_Sceneprint",
                        "paramType": "string(2)",
                        "description": "是否现场打印",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Is_Receipt",
                        "paramType": "string(2)",
                        "description": "是否回单",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Ssa_No",
                        "paramType": "string(20)",
                        "description": "客户编号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Invoice_Staff",
                        "paramType": "string(40)",
                        "description": "开票员",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Recheck_Staff",
                        "paramType": "string(100)",
                        "description": "复核员",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "DefinedVarHdr2",
                        "paramType": "string(50)",
                        "description": "备用字段2",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "DefinedVarHdr3",
                        "paramType": "string(50)",
                        "description": "备用字段3",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Kilometers",
                        "paramType": "decimal(14,2)",
                        "description": "公里数",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Amount",
                        "paramType": "decimal(20,5)",
                        "description": "金额",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Bill_Hdr_Id",
                        "paramType": "string(32)",
                        "description": "单据ID",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Operator_Id",
                        "paramType": "string(32)",
                        "description": "运营方ID",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Bill_Dtl_Id_Old",
                        "paramType": "string(32)",
                        "description": "行号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Is_Reversion",
                        "paramType": "string(2)",
                        "description": "是否冲红",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Sale_Type",
                        "paramType": "string(2)",
                        "description": "销售类型\n1：销售出库\n2：调拨出库\n3：连锁\n4：购进退出\n5：库存整理\n6：直通订单\n7：煎药订单\n8：医院紧急配送\n9：寄售订单\n12：移仓出库\n13：业主转换\n14：中转出库\n20：费列罗移仓订单\n21：多仓销售出库\n22：套包出库\n23：组合出库\n11：折价出库",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Goods_No",
                        "paramType": "string(20)",
                        "description": "商品编号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Ldc_Id",
                        "paramType": "string(32)",
                        "description": "物流中心ID",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Delivery_Address_Id",
                        "paramType": "string(32)",
                        "description": "送货地址ID",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Stock_Status",
                        "paramType": "string(1)",
                        "description": "库存状态\n1：合格\n2：不合格\n3：待验\n4：停售\n5：虚拟\n8：拒收\n9：在库待验",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Price",
                        "paramType": "decimal(14,5)",
                        "description": "单价",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Outbound_Mode",
                        "paramType": "string(10)",
                        "description": "出库方式\n1：出库待配\n2：普通配送\n3：整车配送",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Bill_Dtl_Id",
                        "paramType": "string(10)",
                        "description": "行号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Goods_Lotno",
                        "paramType": "string(15)",
                        "description": "商品批号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Delivery_Time",
                        "paramType": "dateTime",
                        "description": "送货日期",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Goods_Type",
                        "paramType": "string(4)",
                        "description": "产品大类",
                        "children": null
                    }
                ]
            }
        ],
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "ckscjk",
            "method": "post",
            "apiUrl": "/api-general/query/v1/cksc",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"func_type\":\"select\",\"json_data\":{\"Businessbill_No\":\"\",\"Operator_Id\":\"\",\"Con_Id\":\"\",\"Sale_Type\":\"\",\"Invoice_Staff\":\"\"}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/api-general/v1/ypjsjl",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "拒收记录查询",
        "serviceCode": "ypjsjl",
        "shareDesc": "拒收记录查询",
        "apiDocTypeId": 32,
        "description": "仓库拒收操作后的拒收记录的查询接口",
        "apiDesc": "仓库拒收操作后的拒收记录的查询接口",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "func_type",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "select",
                "example": "select",
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "ypjsjl",
                "paramLocation": "body",
                "isNeed": "否",
                "description": null,
                "example": null,
                "children": [
                    {
                        "paramName": "Ldc_Id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "物流中心ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Operator_Id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "运营方ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Con_Id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "委托方ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Start_Date",
                        "paramType": "date",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "开始日期",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "End_Date",
                        "paramType": "date",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "结束日期",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Goods_No",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "商品编号",
                        "example": null,
                        "children": null
                    }
                ]
            }
        ],
        "responseParamList": [
            {
                "statusCode": "200",
                "paramName": null,
                "paramType": "ypjsjlResponse",
                "description": "拒收记录查询成功",
                "children": [
                    {
                        "statusCode": null,
                        "paramName": "Operator",
                        "paramType": "string",
                        "description": "操作人",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Package_Unit",
                        "paramType": "string",
                        "description": "包装单位",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Production_Date",
                        "paramType": "date",
                        "description": "生产日期",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Rejection_Reasons",
                        "paramType": "string",
                        "description": "拒收原因",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Package_Qty",
                        "paramType": "integer",
                        "description": "包装数量",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Businessbill_No",
                        "paramType": "string",
                        "description": "业务单号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Actual_Qty",
                        "paramType": "decimal",
                        "description": "拒收数量",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Drug_Spec",
                        "paramType": "string",
                        "description": "药品规格",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Operator_Id",
                        "paramType": "string",
                        "description": "运营方ID",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Invoice_Time",
                        "paramType": "date",
                        "description": "开票时间",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Goods_No",
                        "paramType": "string",
                        "description": "商品编号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Goods_Name",
                        "paramType": "string",
                        "description": "商品名称",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Ldc_Id",
                        "paramType": "string",
                        "description": "物流中心ID",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Valid_Until",
                        "paramType": "date",
                        "description": "有效期至",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Manufacturer",
                        "paramType": "string",
                        "description": "生产厂家",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Ssa_Name",
                        "paramType": "string",
                        "description": "单位名称",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Goods_Lotno",
                        "paramType": "string",
                        "description": "批号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Ssa_No",
                        "paramType": "string",
                        "description": "单位编码",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Con_Id",
                        "paramType": "string",
                        "description": "委托方ID",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Con_Name",
                        "paramType": "string",
                        "description": "委托方名称",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Approval_No",
                        "paramType": "string",
                        "description": "批准文号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Bill_Dtl_Id_Jzyc",
                        "paramType": "string",
                        "description": "九州云仓ID",
                        "children": null
                    }
                ]
            }
        ],
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "ypjsjl",
            "method": "post",
            "apiUrl": "/api-general/v1/ypjsjl",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"func_type\":\"select\",\"json_data\":{\"Ldc_Id\":\"\",\"Operator_Id\":\"\",\"Con_Id\":\"\",\"Start_Date\":\"\",\"End_Date\":\"\",\"Goods_No\":\"\"}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/api-general/v1/goodsBackPlan",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "商品召回追回计划推送（待开放）",
        "serviceCode": "goodsBackPlan",
        "shareDesc": "商品召回追回计划推送（待开放）",
        "apiDocTypeId": 32,
        "description": "推送商品召回追回计划到九州通仓库",
        "apiDesc": "推送商品召回追回计划到九州通仓库",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "func_type",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "saveData",
                "example": "saveData",
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "goodsBackPlan",
                "paramLocation": "body",
                "isNeed": "否",
                "description": null,
                "example": null,
                "children": [
                    {
                        "paramName": "plan_back_qty",
                        "paramType": "decimal",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "计划召回数量",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "goods_lotno",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "商品批号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "operator_id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "运营方ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "\"back_type",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "\"",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "con_id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "委托方ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "goods_no",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "商品编号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "production_date",
                        "paramType": "date",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "生产日期",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "invoice_time",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "制单时间",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "download_side",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "单据下传方",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "outstore_time",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "原销售出库日期",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "outstorebill_no",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "原销售出库单号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "valid_until",
                        "paramType": "date",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "有效期",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "ldc_id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "物流中心ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "businessbill_no",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "业务单据编号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "back_reason",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "召回原因",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "bill_dtl_id_old",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "行号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "invoice_staff",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "制单员",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "remarks",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "备注",
                        "example": null,
                        "children": null
                    }
                ]
            }
        ],
        "responseParamList": null,
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "goodsBackPlan",
            "method": "post",
            "apiUrl": "/api-general/v1/goodsBackPlan",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"func_type\":\"saveData\",\"json_data\":{\"plan_back_qty\":\"\",\"goods_lotno\":\"\",\"operator_id\":\"\",\"\\\"back_type\":\"\",\"con_id\":\"\",\"goods_no\":\"\",\"production_date\":\"\",\"invoice_time\":\"\",\"download_side\":\"\",\"outstore_time\":\"\",\"outstorebill_no\":\"\",\"valid_until\":\"\",\"ldc_id\":\"\",\"businessbill_no\":\"\",\"back_reason\":\"\",\"bill_dtl_id_old\":\"\",\"invoice_staff\":\"\",\"remarks\":\"\"}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/api-general/v1/oshOrderPlan_Ssa",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "出库计划(含客户)推送（待开放）",
        "serviceCode": "ckjhtsjk",
        "shareDesc": "出库计划(含客户)推送（待开放）",
        "apiDocTypeId": 32,
        "description": "推送销售出库订单、购进退出订单到九州通，可随单带客户（供应商）、地址等信息，自动新增",
        "apiDesc": "推送销售出库订单、购进退出订单到九州通，可随单带客户（供应商）、地址等信息，自动新增",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "func_type",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "saveData",
                "example": "saveData",
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "oshOrderPlanSsa",
                "paramLocation": "body",
                "isNeed": "否",
                "description": null,
                "example": null,
                "children": [
                    {
                        "paramName": "area_2nd",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "二级单位区",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Address",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "收件地址\n需包含省份、城市、区县的标准三级地址",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Rp_Reasons",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "退货原因\n购进退出需传此字段，传退货原因字典值，例如：开票原因：开错批号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Rp_Cate",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "退货类别\n1：合格\n2：不合格\n3：不限定",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "ssa_no_2nd",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "二级单位编号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Remarks",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "备注",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Outbaddress_Id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "出库地址ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Aging",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "时效\n24\n48\n72\n96\n120",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Street",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "街道",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Ssa_Name",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "客户名称",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Is_Sceneprint",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "是否现场打印\nN：否\nY：是",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Con_Id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "委托方ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "City",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "城市",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Province",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "省份",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "street_2nd",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "二级单位街道",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Area",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "区县",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "concat_name",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "收件人",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Price",
                        "paramType": "decimal",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "单价",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Bill_Dtl_Id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "行号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Goods_Lotno",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "商品批号\n销售类型=购进退出时，需传输此字段，出库订单可传可不传",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "province_2nd",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "二级单位省",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Takegoods_Mode",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "提货方式\n1：自提\n3：托运\n4：市内配送",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Biz_Bill_No",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "业务单据编号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Production_Date",
                        "paramType": "date",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "生产日期\n批号不为空时，生产日期不能为空",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Outnbound_Quantity",
                        "paramType": "decimal",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "出库数量",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "concat_phone_2nd",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "二级单位联系电话",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Instorebill_No",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "购进入库单号\n销售类型=购进退出时，需传输此字段，为购进退出单据对应的原入库单据的业务单据编号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "ssa_name_2nd",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "二级单位名称",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Invoice_Time",
                        "paramType": "dateTime",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "制单时间",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Goods_Value",
                        "paramType": "decimal",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "商品价值\n需出库配送时，填写商品价值后根据商品价值保价",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Valid_Until",
                        "paramType": "date",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "有效期\n批号不为空时，有效期不能为空",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Is_Receipt",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "是否回单\nN：否\nY：是",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Ssa_No",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "客户编号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "channel_type",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "渠道类型\nZD:终端\nQT:其他",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "city_2nd",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "二级单位市",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Invoice_Staff",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "制单员\n方式一：对接职员资料，传职员编号，可默认传委托方管理员职员编号\n方式二：不对接职员资料，直接传职员名称",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Kilometers",
                        "paramType": "decimal",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "公里数",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Amount",
                        "paramType": "decimal",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "金额",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Operator_Id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "运营方ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Sale_Type",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "销售类型\n1：销售出库\n4：购进退出",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Goods_No",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "商品编号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "concat_name_2nd",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "二级单位联系人",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Ldc_Id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "物流中心ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "address_2nd",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "二级单位地址",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Delivery_Address_Id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "送货地址ID\n3.传地址资料接口中对接的Address_Old_Id\n4.不传默认取客户的默认配送地址",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Outbound_Mode",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "出库方式\n1：出库待配\n2：出库配送",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Delivery_Time",
                        "paramType": "dateTime",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "送货日期",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "concat_phone",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "收件联系电话",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Goods_Type",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "产品大类\n8:冷藏品\n9:阴凉品",
                        "example": null,
                        "children": null
                    }
                ]
            }
        ],
        "responseParamList": null,
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "ckjhtsjk",
            "method": "post",
            "apiUrl": "/api-general/v1/oshOrderPlan_Ssa",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"func_type\":\"saveData\",\"json_data\":{\"area_2nd\":\"\",\"Address\":\"\",\"Rp_Reasons\":\"\",\"Rp_Cate\":\"\",\"ssa_no_2nd\":\"\",\"Remarks\":\"\",\"Outbaddress_Id\":\"\",\"Aging\":\"\",\"Street\":\"\",\"Ssa_Name\":\"\",\"Is_Sceneprint\":\"\",\"Con_Id\":\"\",\"City\":\"\",\"Province\":\"\",\"street_2nd\":\"\",\"Area\":\"\",\"concat_name\":\"\",\"Price\":\"\",\"Bill_Dtl_Id\":\"\",\"Goods_Lotno\":\"\",\"province_2nd\":\"\",\"Takegoods_Mode\":\"\",\"Biz_Bill_No\":\"\",\"Production_Date\":\"\",\"Outnbound_Quantity\":\"\",\"concat_phone_2nd\":\"\",\"Instorebill_No\":\"\",\"ssa_name_2nd\":\"\",\"Invoice_Time\":\"\",\"Goods_Value\":\"\",\"Valid_Until\":\"\",\"Is_Receipt\":\"\",\"Ssa_No\":\"\",\"channel_type\":\"\",\"city_2nd\":\"\",\"Invoice_Staff\":\"\",\"Kilometers\":\"\",\"Amount\":\"\",\"Operator_Id\":\"\",\"Sale_Type\":\"\",\"Goods_No\":\"\",\"concat_name_2nd\":\"\",\"Ldc_Id\":\"\",\"address_2nd\":\"\",\"Delivery_Address_Id\":\"\",\"Outbound_Mode\":\"\",\"Delivery_Time\":\"\",\"concat_phone\":\"\",\"Goods_Type\":\"\"}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/api-general/v1/wlzt",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "物流状态查询",
        "serviceCode": "wlztcx",
        "shareDesc": "物流状态查询",
        "apiDocTypeId": 32,
        "description": "订单完成配送后的物流状态查询接口",
        "apiDesc": "订单完成配送后的物流状态查询接口",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "func_type",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "select",
                "example": "select",
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "wlzt",
                "paramLocation": "body",
                "isNeed": "否",
                "description": null,
                "example": null,
                "children": [
                    {
                        "paramName": "Biz_Bill_No",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "业务单据编号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Operator_Id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "运营方ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Con_Id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "委托方ID",
                        "example": null,
                        "children": null
                    }
                ]
            }
        ],
        "responseParamList": [
            {
                "statusCode": "200",
                "paramName": null,
                "paramType": "wlztResponse",
                "description": "物流状态查询成功",
                "children": [
                    {
                        "statusCode": null,
                        "paramName": "Operate_State",
                        "paramType": "string",
                        "description": "操作节点",
                        "children": null
                    }
                ]
            }
        ],
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "wlztcx",
            "method": "post",
            "apiUrl": "/api-general/v1/wlzt",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"func_type\":\"select\",\"json_data\":{\"Biz_Bill_No\":\"\",\"Operator_Id\":\"\",\"Con_Id\":\"\"}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/api-general/v1/rk",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "入库计划推送",
        "serviceCode": "rk",
        "shareDesc": "入库计划推送",
        "apiDocTypeId": 32,
        "description": "推送入库计划、采购入库、销退订单到九州通。",
        "apiDesc": "推送入库计划、采购入库、销退订单到九州通。",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "json_data",
                "paramType": "rkList",
                "paramLocation": "body",
                "isNeed": "否",
                "description": null,
                "example": null,
                "children": [
                    {
                        "paramName": "func_type",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": null,
                        "example": "saveData",
                        "children": null
                    },
                    {
                        "paramName": "json_data",
                        "paramType": "array[rk]",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": null,
                        "example": null,
                        "children": [
                            {
                                "paramName": "ssa_no",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "客户编号",
                                "example": "K998",
                                "children": null
                            },
                            {
                                "paramName": "departure_address",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "启运地点",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "arrival_mode",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "到货方式\n1：客户送货\n2：托运公司送货\n3：公司自提\n4：邮政到货\n5：子公司直接送货\n6：到托运公司提货\n7：暂存\n8：销毁\n9：直调\nA1：待货入库\nA2：提货入库",
                                "example": "2",
                                "children": null
                            },
                            {
                                "paramName": "transport_time",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "启运时间",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_lotno",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "商品批号\n销售退回必填",
                                "example": "1704116",
                                "children": null
                            },
                            {
                                "paramName": "operator_id",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "运营方ID",
                                "example": "272928273441075",
                                "children": null
                            },
                            {
                                "paramName": "con_id",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "委托方ID",
                                "example": "16368478644982411",
                                "children": null
                            },
                            {
                                "paramName": "goods_no",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "商品编号",
                                "example": "04743",
                                "children": null
                            },
                            {
                                "paramName": "production_date",
                                "paramType": "date",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "生产日期\n批号不为空时，生产日期不能为空",
                                "example": "2023-10-24",
                                "children": null
                            },
                            {
                                "paramName": "danjxc_side",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "单据下传方\n外部三方：1；\n九州通内部公司：0",
                                "example": "2",
                                "children": null
                            },
                            {
                                "paramName": "tprt_record",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "到货记录",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "invoice_time",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "制单时间",
                                "example": "2023-11-24 22:28:22",
                                "children": null
                            },
                            {
                                "paramName": "rp_reasons",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "退货原因\n销退流程是必填的",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "cc_accessorial_service_item_code",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "仓储增值服务编码\n字典值，值有：XCFW卸车服务",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "ldc_id",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "物流中心ID",
                                "example": "69025125577859411",
                                "children": null
                            },
                            {
                                "paramName": "businessbill_no",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "业务单据编号  主键",
                                "example": "CKCS2023102756",
                                "children": null
                            },
                            {
                                "paramName": "price",
                                "paramType": "decimal",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "单价",
                                "example": 10.0,
                                "children": null
                            },
                            {
                                "paramName": "storageaddress_id",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "入库地址ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "business_type",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "入库类型   1:正常入库 4:销售退回",
                                "example": "1",
                                "children": null
                            },
                            {
                                "paramName": "fee_con_id",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "计费委托方id",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "transport_mode",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "运输方式",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Storage_Quantity",
                                "paramType": "decimal",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "计划数量",
                                "example": 3.0,
                                "children": null
                            },
                            {
                                "paramName": "amount",
                                "paramType": "decimal",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "金额",
                                "example": 30.0,
                                "children": null
                            },
                            {
                                "paramName": "driver_staff",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "司机",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "ys_accessorial_service_item_code",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "运输增值服务编码\n字典值，值有：HWBX货物保险",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "vehicle_no",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "车牌号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "tprt_mode",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "到货方式",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "outstorebill_no",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "出库单号  销售退回单据对应的原出库业务单据编号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "takegds_time",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "接货时间",
                                "example": "2023-12-12",
                                "children": null
                            },
                            {
                                "paramName": "tdeladdress_id",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "提货地址ID   若不传默认取委托方的默认地址",
                                "example": "37621838888888819",
                                "children": null
                            },
                            {
                                "paramName": "valid_until",
                                "paramType": "date",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "有效期\n批号不为空时，有效期不能为空",
                                "example": "2015-03-31",
                                "children": null
                            },
                            {
                                "paramName": "insurance_amount",
                                "paramType": "decimal",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "投保金额\n默认值：0",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "transport_ssa",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "运输单位",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "acceptance_check_rlt",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "验收评定  1:合格 2:不合格 3:入库待验 4:拒收 5:待验确定6:在库待验",
                                "example": "1",
                                "children": null
                            },
                            {
                                "paramName": "bill_dtl_id_old",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "行号  单据内行号不允许重复",
                                "example": "1",
                                "children": null
                            },
                            {
                                "paramName": "recorder_no",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "记录仪型号或编号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "invoice_staff",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "制单员",
                                "example": "MACF",
                                "children": null
                            },
                            {
                                "paramName": "return_mode_code",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "退回方式\n字典值，值有：1客户自寄、2物流带回\n默认为1",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_type",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "产品大类  1：西药 2：中药(小袋) 3：计生 4：器械 5：原料药 6：第三方 7：赠品 8：冷藏品 9：阴凉品 10：消费品 11：赠品Y 12：可混开 13：中药(大袋)",
                                "example": "8",
                                "children": null
                            },
                            {
                                "paramName": "goods_value",
                                "paramType": "decimal",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "商品价值",
                                "example": 10.0,
                                "children": null
                            },
                            {
                                "paramName": "aging",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "时效  24/48/72/96/120 (小时)",
                                "example": "24",
                                "children": null
                            },
                            {
                                "paramName": "remarks",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "备注  填写订单备注信息",
                                "example": "席元波测试",
                                "children": null
                            },
                            {
                                "paramName": "transport_staff",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "配送员",
                                "example": "",
                                "children": null
                            }
                        ]
                    }
                ]
            }
        ],
        "responseParamList": null,
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "rk",
            "method": "post",
            "apiUrl": "/api-general/v1/rk",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"func_type\":\"saveData\",\"json_data\":[{\"ssa_no\":\"K998\",\"departure_address\":\"\",\"arrival_mode\":\"2\",\"transport_time\":\"\",\"goods_lotno\":\"1704116\",\"operator_id\":\"272928273441075\",\"con_id\":\"16368478644982411\",\"goods_no\":\"04743\",\"production_date\":\"2023-10-24\",\"danjxc_side\":\"2\",\"tprt_record\":\"\",\"invoice_time\":\"2023-11-24 22:28:22\",\"rp_reasons\":\"\",\"cc_accessorial_service_item_code\":\"\",\"ldc_id\":\"69025125577859411\",\"businessbill_no\":\"CKCS2023102756\",\"price\":10.0,\"storageaddress_id\":\"\",\"business_type\":\"1\",\"fee_con_id\":\"\",\"transport_mode\":\"\",\"Storage_Quantity\":3.0,\"amount\":30.0,\"driver_staff\":\"\",\"ys_accessorial_service_item_code\":\"\",\"vehicle_no\":\"\",\"tprt_mode\":\"\",\"outstorebill_no\":\"\",\"takegds_time\":\"2023-12-12\",\"tdeladdress_id\":\"37621838888888819\",\"valid_until\":\"2015-03-31\",\"insurance_amount\":\"\",\"transport_ssa\":\"\",\"acceptance_check_rlt\":\"1\",\"bill_dtl_id_old\":\"1\",\"recorder_no\":\"\",\"invoice_staff\":\"MACF\",\"return_mode_code\":\"\",\"goods_type\":\"8\",\"goods_value\":10.0,\"aging\":\"24\",\"remarks\":\"席元波测试\",\"transport_staff\":\"\"}]}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/api-general/v1/bsbs",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "报升报损回传",
        "serviceCode": "bsbshc",
        "shareDesc": "报升报损回传",
        "apiDocTypeId": 32,
        "description": "仓库完成报审报损操作后，调用接口查询回传记录",
        "apiDesc": "仓库完成报审报损操作后，调用接口查询回传记录",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "func_type",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "select",
                "example": "select",
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "bsbshc",
                "paramLocation": "body",
                "isNeed": "否",
                "description": null,
                "example": null,
                "children": [
                    {
                        "paramName": "Ldc_Id",
                        "paramType": "string(32)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "物流中心ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Biz_Bill_No",
                        "paramType": "string(50)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "业务单据编号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Operator_Id",
                        "paramType": "string(32)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "运营方 ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Con_Id",
                        "paramType": "string(32)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "委托方 ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Goods_No",
                        "paramType": "string(32)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "商品编号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Lot_No",
                        "paramType": "string(200)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "批号",
                        "example": null,
                        "children": null
                    }
                ]
            }
        ],
        "responseParamList": [
            {
                "statusCode": "200",
                "paramName": null,
                "paramType": "bsbsResponse",
                "description": "报升报损回传成功",
                "children": [
                    {
                        "statusCode": null,
                        "paramName": "Package_Unit",
                        "paramType": "string",
                        "description": "包装单位",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Actual_Qty_St",
                        "paramType": "decimal",
                        "description": "差异数量",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Biz_Bill_No",
                        "paramType": "string",
                        "description": "业务单号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Production_Date",
                        "paramType": "date",
                        "description": "生产日期",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Goods_Id",
                        "paramType": "string",
                        "description": "商品ID",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Package_Qty",
                        "paramType": "integer",
                        "description": "包装数量",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Drug_Spec",
                        "paramType": "string",
                        "description": "药品规格",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Operator_Id",
                        "paramType": "string",
                        "description": "运营方ID",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Goods_No",
                        "paramType": "string",
                        "description": "商品编号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Goods_Name",
                        "paramType": "string",
                        "description": "中文名",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Lot_No",
                        "paramType": "string",
                        "description": "批号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Ldc_Id",
                        "paramType": "string",
                        "description": "物流中心ID",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Operate_State",
                        "paramType": "string",
                        "description": "操作节点",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Valid_Until",
                        "paramType": "date",
                        "description": "有效期",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Bill_Dtl_Id",
                        "paramType": "string",
                        "description": "单据行号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "St_Reasons",
                        "paramType": "string",
                        "description": "盘点原因",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Manufacturer",
                        "paramType": "string",
                        "description": "生产厂家",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Con_Id",
                        "paramType": "string",
                        "description": "委托方ID",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Approval_No",
                        "paramType": "string",
                        "description": "批准文号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "St_Cate",
                        "paramType": "string",
                        "description": "盘点类别",
                        "children": null
                    }
                ]
            }
        ],
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "bsbshc",
            "method": "post",
            "apiUrl": "/api-general/v1/bsbs",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"func_type\":\"select\",\"json_data\":{\"Ldc_Id\":\"\",\"Biz_Bill_No\":\"\",\"Operator_Id\":\"\",\"Con_Id\":\"\",\"Goods_No\":\"\",\"Lot_No\":\"\"}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/api-general/query/v1/fjjl",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "质量复检记录查询",
        "serviceCode": "fjjl",
        "shareDesc": "质量复检记录查询",
        "apiDocTypeId": 32,
        "description": "查询复检记录",
        "apiDesc": "查询复检记录",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "func_type",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "select",
                "example": "select",
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "fjjl",
                "paramLocation": "body",
                "isNeed": "否",
                "description": null,
                "example": null,
                "children": [
                    {
                        "paramName": "Ldc_Id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "物流中心ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Goods_Id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "商品Id",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "businessbill_no",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "业务复检单号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Operator_Id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "运营方ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Con_Id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "委托方ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Start_Date",
                        "paramType": "dateTime",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "开始时间",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "End_Date",
                        "paramType": "decimal",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "结束时间",
                        "example": null,
                        "children": null
                    }
                ]
            }
        ],
        "responseParamList": [
            {
                "statusCode": "200",
                "paramName": null,
                "paramType": "fjjlResponse",
                "description": "质量复检记录查询成功",
                "children": [
                    {
                        "statusCode": null,
                        "paramName": "ssa_no",
                        "paramType": "string",
                        "description": "单位编号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "ssa_name",
                        "paramType": "string",
                        "description": "单位名称",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "goods_lotno",
                        "paramType": "string",
                        "description": "商品批号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "goods_no",
                        "paramType": "string",
                        "description": "商品编号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "production_date",
                        "paramType": "date",
                        "description": "生产日期",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "quality_problem",
                        "paramType": "string",
                        "description": "复检问题",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "invoice_time",
                        "paramType": "dateTime",
                        "description": "开票时间",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "operator",
                        "paramType": "string",
                        "description": "操作人",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "package_qty",
                        "paramType": "decimal",
                        "description": "包装数量",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "manufacturer",
                        "paramType": "string",
                        "description": "生产厂家",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "ldc_name",
                        "paramType": "string",
                        "description": "物流中心名称",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "businessbill_no",
                        "paramType": "string",
                        "description": "业务复检单号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "id",
                        "paramType": "string",
                        "description": "序号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Approval_No",
                        "paramType": "string",
                        "description": "证照ID",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "created_time",
                        "paramType": "string",
                        "description": "创建时间",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "con_no",
                        "paramType": "string",
                        "description": "委托方编号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "goods_name",
                        "paramType": "string",
                        "description": "药品名称",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "con_name",
                        "paramType": "string",
                        "description": "委托方名称",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "gsprecheck_type",
                        "paramType": "string",
                        "description": "复检类型",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "tcm_troducing_area",
                        "paramType": "string",
                        "description": "中药产地",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "auditor",
                        "paramType": "string",
                        "description": "lmis审核人",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Drug_Spec",
                        "paramType": "string",
                        "description": "药品规格",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "marketingAuthorisationHolder",
                        "paramType": "string",
                        "description": "药品上市许可持有人",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "valid_until",
                        "paramType": "date",
                        "description": "有效期至",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "actual_qty",
                        "paramType": "decimal",
                        "description": "复检数量",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "package_unit",
                        "paramType": "string",
                        "description": "包装单位",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "receiving_result",
                        "paramType": "string",
                        "description": "收货结论",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "universal_name",
                        "paramType": "string",
                        "description": "药品通用名",
                        "children": null
                    }
                ]
            }
        ],
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "fjjl",
            "method": "post",
            "apiUrl": "/api-general/query/v1/fjjl",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"func_type\":\"select\",\"json_data\":{\"Ldc_Id\":\"\",\"Goods_Id\":\"\",\"businessbill_no\":\"\",\"Operator_Id\":\"\",\"Con_Id\":\"\",\"Start_Date\":\"\",\"End_Date\":\"\"}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": " /api-general/v1/QMS_STATECHANGE_CONFIRMATION",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "库存状态变化审核结果推送接口",
        "serviceCode": "QMS_STATECHANGE_CONFIRMATION",
        "shareDesc": "库存状态变化审核结果推送接口",
        "apiDocTypeId": 32,
        "description": "库存状态变化审核结果推送接口",
        "apiDesc": "库存状态变化审核结果推送接口",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "json_data",
                "paramType": "kcztbhshjg1",
                "paramLocation": "body",
                "isNeed": "否",
                "description": "查询/保存内容",
                "example": null,
                "children": [
                    {
                        "paramName": "func_type",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "方法类别（select；saveData）",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "json_data",
                        "paramType": "array[kcztbhshjg]",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "查询/保存内容",
                        "example": null,
                        "children": [
                            {
                                "paramName": "ish_businessbill_no",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "LMIS入库单号\n采购入库回传的InstoreBill_No_LMIS\n必填，唯一性校验使用",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_lotno",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "商品批号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "stock_org_name",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "库存组织名称",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "operator_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "运营方ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_code",
                                "paramType": "integer",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主商品id",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "con_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_no",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "商品编号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "stock_status_new",
                                "paramType": "string(1)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "目的库存状态\n1 合格\n2 不合格\n3 入库待验\n4 停售\n5 在库待验\n6 待处理\n7 待处理（退货）\n9 虚拟库存",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "invoice_time",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "制单时间",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "image_address",
                                "paramType": "string(1000)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "图片地址\n多个图片拼接显示",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "bill_dtl_no",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主单据明细行号\n(必传--单据pk主键；)",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "ish_dtl_wms",
                                "paramType": "integer",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "LMIS入库行号\n采购入库回传的Bill_Dtl_Id\n必填，唯一性校验使用",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "ldc_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "物流中心ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "actual_qty",
                                "paramType": "decimal(22.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "数量",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "stock_org_id",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "库存组织ID\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "businessbill_no",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主业务单据编号\n(货主单据明细行号)",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "trans_reason",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "库存状态原因",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "stock_status_old",
                                "paramType": "string(1)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "库存状态\n1 合格\n2 不合格\n3 入库待验\n4 停售\n5 在库待验\n6 待处理\n7 待处理（退货）\n9 虚拟库存",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "invoice_staff",
                                "paramType": "string(60)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "制单员",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "handling_opinion",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "处理意见",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "stock_status_trans_type",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "库存状态变化类型\n1:合格转待处理\n2:合格转停售\n3:待处理转合格\n4:待处理转停售\n5:停售转合格\n6:待处理转不合格\n7:停售转不合格",
                                "example": null,
                                "children": null
                            }
                        ]
                    }
                ]
            }
        ],
        "responseParamList": null,
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "QMS_STATECHANGE_CONFIRMATION",
            "method": "post",
            "apiUrl": " /api-general/v1/QMS_STATECHANGE_CONFIRMATION",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"func_type\":\"\",\"json_data\":[{\"ish_businessbill_no\":\"\",\"goods_lotno\":\"\",\"stock_org_name\":\"\",\"operator_id\":\"\",\"goods_code\":\"\",\"con_id\":\"\",\"goods_no\":\"\",\"stock_status_new\":\"\",\"invoice_time\":\"\",\"image_address\":\"\",\"bill_dtl_no\":\"\",\"ish_dtl_wms\":\"\",\"ldc_id\":\"\",\"actual_qty\":\"\",\"stock_org_id\":\"\",\"businessbill_no\":\"\",\"trans_reason\":\"\",\"stock_status_old\":\"\",\"invoice_staff\":\"\",\"handling_opinion\":\"\",\"stock_status_trans_type\":\"\"}]}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/api-general/v1/goodsBackCancel",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "商品召回追回指令取消",
        "serviceCode": "goodsBackCancel",
        "shareDesc": "商品召回追回指令取消",
        "apiDocTypeId": 32,
        "description": "推送商品召回追回取消指令到九州通仓库",
        "apiDesc": "推送商品召回追回取消指令到九州通仓库",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "func_type",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "saveData",
                "example": "saveData",
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "goodsBackCancel",
                "paramLocation": "body",
                "isNeed": "否",
                "description": null,
                "example": null,
                "children": [
                    {
                        "paramName": "businessbill_no",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "业务单据编号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "operator_id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "运营方ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "con_id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "委托方ID",
                        "example": null,
                        "children": null
                    }
                ]
            }
        ],
        "responseParamList": null,
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "goodsBackCancel",
            "method": "post",
            "apiUrl": "/api-general/v1/goodsBackCancel",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"func_type\":\"saveData\",\"json_data\":{\"businessbill_no\":\"\",\"operator_id\":\"\",\"con_id\":\"\"}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/api-general/v1/knzztcSupply",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "库内周转调差申请单推送（暂内部）",
        "serviceCode": "knzztcSupply",
        "shareDesc": "库内周转调差申请单推送（暂内部）",
        "apiDocTypeId": 32,
        "description": "医药公司和药九九公司进行库存内转业务完成后，仓库发现实物破损或其他异常情况导致无法出库时，需走库内周转调差申请单接口，将药九九库存共享差异数据调还给医药公司。",
        "apiDesc": "医药公司和药九九公司进行库存内转业务完成后，仓库发现实物破损或其他异常情况导致无法出库时，需走库内周转调差申请单接口，将药九九库存共享差异数据调还给医药公司。",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "func_type",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "方法类别",
                "example": "saveData",
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "knzztcSupply",
                "paramLocation": "body",
                "isNeed": "否",
                "description": "保存内容",
                "example": null,
                "children": [
                    {
                        "paramName": "ssa_no",
                        "paramType": "string(50)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "调出客户ID，ERP药九九购进退出单客户ID",
                        "example": "",
                        "children": null
                    },
                    {
                        "paramName": "branchid_t",
                        "paramType": "string(20)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "调入方业主\n传ERP调入方branchid",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "goods_no_f",
                        "paramType": "string(20)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "调出商品ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "goods_lotno",
                        "paramType": "string(30)",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "商品批号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "production_date",
                        "paramType": "date",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "生产日期\n批号不为空时，生产日期不能为空",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "invoice_time",
                        "paramType": "dateTime",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "开票时间",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "goods_no_t",
                        "paramType": "string(20)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "调入商品ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "download_side",
                        "paramType": "string(20)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "单据下传方\n0:自营ERP，1:委托方系统",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "relevant_ssa_no",
                        "paramType": "string(50)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "调入客户ID，销售退回客户ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "usage_name_t",
                        "paramType": "string(200)",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "调入方用途名称",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "branchid_f",
                        "paramType": "string(20)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "调出方业主\n传ERP调出方branchid",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "businessbill_no",
                        "paramType": "string(30)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "业务单据编号，主键",
                        "example": "",
                        "children": null
                    },
                    {
                        "paramName": "borg_id_f",
                        "paramType": "string(30)",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "调出方业务组织id",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "price",
                        "paramType": "decimal(14,5)",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "单价",
                        "example": 0.0,
                        "children": null
                    },
                    {
                        "paramName": "ldc_id_f",
                        "paramType": "string(32)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "调出物流中心ID，ERP药九九购进退出仓编码",
                        "example": "",
                        "children": null
                    },
                    {
                        "paramName": "usage_name_f",
                        "paramType": "string(200)",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "调出方用途名称",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "amount",
                        "paramType": "decimal(20,5)",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "金额",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "sorg_id_f",
                        "paramType": "string(30)",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "调出方库存组织id",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "borg_id_t",
                        "paramType": "string(30)",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "调入方业务组织id",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "usage_id_f",
                        "paramType": "string(30)",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "调出方用途id",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "borg_name_f",
                        "paramType": "string(200)",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "调出方业务组织名称",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "usage_id_t",
                        "paramType": "string(30)",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "调入方用途id",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "sorg_id_t",
                        "paramType": "string(30)",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "调入方库存组织id",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "ldc_id_t",
                        "paramType": "string(32)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "调入物流中心ID，ERP批发公司销售退回仓编码",
                        "example": "",
                        "children": null
                    },
                    {
                        "paramName": "outstorebill_no",
                        "paramType": "string(30)",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "出库单号，原出库单据的业务单号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "valid_until",
                        "paramType": "date",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "有效期至\n批号不为空时，有效期不能为空",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "actual_qty",
                        "paramType": "decimal(14,5)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "数量",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "sorg_name_f",
                        "paramType": "string(200)",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "调出方库存组织名称",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "bill_dtl_id_old",
                        "paramType": "string(10)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "行号\n同业务单行号不允许重复",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "invoice_staff",
                        "paramType": "string(40)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "开票员",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "goods_type",
                        "paramType": "string(4)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "产品大类，\n8:冷藏品  9:阴凉品",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "borg_name_t",
                        "paramType": "string(200)",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "调入方业务组织名称",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "sorg_name_t",
                        "paramType": "string(200)",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "调入方库存组织名称",
                        "example": null,
                        "children": null
                    }
                ]
            }
        ],
        "responseParamList": null,
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "knzztcSupply",
            "method": "post",
            "apiUrl": "/api-general/v1/knzztcSupply",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"func_type\":\"saveData\",\"json_data\":{\"ssa_no\":\"\",\"branchid_t\":\"\",\"goods_no_f\":\"\",\"goods_lotno\":\"\",\"production_date\":\"\",\"invoice_time\":\"\",\"goods_no_t\":\"\",\"download_side\":\"\",\"relevant_ssa_no\":\"\",\"usage_name_t\":\"\",\"branchid_f\":\"\",\"businessbill_no\":\"\",\"borg_id_f\":\"\",\"price\":0.0,\"ldc_id_f\":\"\",\"usage_name_f\":\"\",\"amount\":\"\",\"sorg_id_f\":\"\",\"borg_id_t\":\"\",\"usage_id_f\":\"\",\"borg_name_f\":\"\",\"usage_id_t\":\"\",\"sorg_id_t\":\"\",\"ldc_id_t\":\"\",\"outstorebill_no\":\"\",\"valid_until\":\"\",\"actual_qty\":\"\",\"sorg_name_f\":\"\",\"bill_dtl_id_old\":\"\",\"invoice_staff\":\"\",\"goods_type\":\"\",\"borg_name_t\":\"\",\"sorg_name_t\":\"\"}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/api-general/v1/rkysjl",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "采购入库验收记录",
        "serviceCode": "cgrkysjl",
        "shareDesc": "采购入库验收记录",
        "apiDocTypeId": 32,
        "description": "采购入库单据完成后的验收记录查询接口",
        "apiDesc": "采购入库单据完成后的验收记录查询接口",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "func_type",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "select",
                "example": "select",
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "rkysjl",
                "paramLocation": "body",
                "isNeed": "否",
                "description": null,
                "example": null,
                "children": [
                    {
                        "paramName": "Ldc_Id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "物流中心ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Businessbill_No",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "业务单据编号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Operator_Id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "运营方ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Con_Id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "委托方ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Start_Date",
                        "paramType": "date",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "开始日期",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "End_Date",
                        "paramType": "date",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "结束日期",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Goods_No",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "商品编号",
                        "example": null,
                        "children": null
                    }
                ]
            }
        ],
        "responseParamList": [
            {
                "statusCode": "200",
                "paramName": null,
                "paramType": "rkysjlResponse",
                "description": "采购入库验收记录成功",
                "children": [
                    {
                        "statusCode": null,
                        "paramName": "Instore_Time",
                        "paramType": "string",
                        "description": "入库日期",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Package_Unit",
                        "paramType": "string",
                        "description": "包装单位",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Production_Date",
                        "paramType": "date",
                        "description": "生产日期",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Actual_Qty",
                        "paramType": "decimal",
                        "description": "到货数量",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Businessbill_No",
                        "paramType": "string",
                        "description": "业务单据编号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Drug_Spec",
                        "paramType": "string",
                        "description": "药品规格",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Goods_No",
                        "paramType": "string",
                        "description": "商品编号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Goods_Name",
                        "paramType": "string",
                        "description": "中文名",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Lot_No",
                        "paramType": "string",
                        "description": "批号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Dosage_Form",
                        "paramType": "string",
                        "description": "剂型",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Valid_Until",
                        "paramType": "date",
                        "description": "有效期",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Qualified_Qty",
                        "paramType": "decimal",
                        "description": "验收合格数量",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Quality_Time",
                        "paramType": "string",
                        "description": "质检日期",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Quality_Inspector",
                        "paramType": "string",
                        "description": "质检员",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Receiving_Result",
                        "paramType": "string",
                        "description": "收货结论",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Manufacturer",
                        "paramType": "string",
                        "description": "生产厂家",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Ssa_Name",
                        "paramType": "string",
                        "description": "供货单位",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "InstoreBill_No_LMIS",
                        "paramType": "string",
                        "description": "LMIS作业单号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Ssa_No",
                        "paramType": "string",
                        "description": "客户编号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Producing_Area",
                        "paramType": "string",
                        "description": "产地",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Arrival_Time",
                        "paramType": "string",
                        "description": "到货日期",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Approval_No",
                        "paramType": "string",
                        "description": "批准文号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Acceptance_Check_Rlt",
                        "paramType": "string",
                        "description": "验收评定",
                        "children": null
                    }
                ]
            }
        ],
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "cgrkysjl",
            "method": "post",
            "apiUrl": "/api-general/v1/rkysjl",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"func_type\":\"select\",\"json_data\":{\"Ldc_Id\":\"\",\"Businessbill_No\":\"\",\"Operator_Id\":\"\",\"Con_Id\":\"\",\"Start_Date\":\"\",\"End_Date\":\"\",\"Goods_No\":\"\"}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/api-general/v1/InfDataDistributePub",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "库存预留单推送接口",
        "serviceCode": "InfDataDistributePub",
        "shareDesc": "库存预留单推送接口",
        "apiDocTypeId": 32,
        "description": "推送库存预留单到九州通仓库，对仓库库存进行提前预留",
        "apiDesc": "推送库存预留单到九州通仓库，对仓库库存进行提前预留",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "func_type",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "saveData",
                "example": "saveData",
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "InfDataDistributePub",
                "paramLocation": "body",
                "isNeed": "否",
                "description": null,
                "example": null,
                "children": [
                    {
                        "paramName": "sorg_name",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "库存组织名称（没有值时传NULL）",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "usage_name",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "用途名称（没有值时传NULL）",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "sorg_id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "库存组织id（没有值时传NULL）",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "borg_name",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "业务组织名称（没有值时传NULL）",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "goods_lotno",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "商品批号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "bill_dtl_id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "单据行号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "operator_id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "运营方 ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "con_id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "委托方 ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "goods_no",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "商品编号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "movetck_id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "移入仓ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "invoice_time",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "制单时间",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "type",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "预留类型",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "usage_id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "用途id（没有值时传NULL）",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "ldc_id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "物流中心 ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "businessbill_no",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "业务单据编号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "stock_qty",
                        "paramType": "decimal",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "预占数量",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "movefck_id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "移出仓ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "invoice_staff",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "制单员",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "borg_id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "业务组织id（没有值时传NULL）",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Takegoods_Mode",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "提货方式",
                        "example": null,
                        "children": null
                    }
                ]
            }
        ],
        "responseParamList": null,
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "InfDataDistributePub",
            "method": "post",
            "apiUrl": "/api-general/v1/InfDataDistributePub",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"func_type\":\"saveData\",\"json_data\":{\"sorg_name\":\"\",\"usage_name\":\"\",\"sorg_id\":\"\",\"borg_name\":\"\",\"goods_lotno\":\"\",\"bill_dtl_id\":\"\",\"operator_id\":\"\",\"con_id\":\"\",\"goods_no\":\"\",\"movetck_id\":\"\",\"invoice_time\":\"\",\"type\":\"\",\"usage_id\":\"\",\"ldc_id\":\"\",\"businessbill_no\":\"\",\"stock_qty\":\"\",\"movefck_id\":\"\",\"invoice_staff\":\"\",\"borg_id\":\"\",\"Takegoods_Mode\":\"\"}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/api-general/v1/oshOrderPlan",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "出库计划推送",
        "serviceCode": "oshOrderPlan",
        "shareDesc": "出库计划推送",
        "apiDocTypeId": 32,
        "description": "推送销售出库订单、购进退出订单到九州通",
        "apiDesc": "推送销售出库订单、购进退出订单到九州通",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "json_data",
                "paramType": "oshOrderPlanList",
                "paramLocation": "body",
                "isNeed": "否",
                "description": null,
                "example": null,
                "children": [
                    {
                        "paramName": "func_type",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": null,
                        "example": "saveData",
                        "children": null
                    },
                    {
                        "paramName": "json_data",
                        "paramType": "array[oshOrderPlan]",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": null,
                        "example": null,
                        "children": [
                            {
                                "paramName": "Biz_Bill_No",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "业务单据编号",
                                "example": "CKCS2023102756",
                                "children": null
                            },
                            {
                                "paramName": "Production_Date",
                                "paramType": "date",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "生产日期\n批号不为空时，生产日期不能为空",
                                "example": "2023-03-31",
                                "children": null
                            },
                            {
                                "paramName": "payer_mode",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "付款方\n字典值，值有：01委托方付、02委托方客户付、03仓配客户付\n默认值：01",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Rp_Reasons",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "退货原因\n购进退出需传此字段，传退货原因字典值，例如：开票原因：开错批号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Outnbound_Quantity",
                                "paramType": "decimal",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "出库数量",
                                "example": 2.0,
                                "children": null
                            },
                            {
                                "paramName": "danjxc_side",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "单据下传方\n外部三方：1；\n九州通内部公司：0",
                                "example": "1",
                                "children": null
                            },
                            {
                                "paramName": "Instorebill_No",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "购进入库单号\n销售类型=购进退出时，需传输此字段，为购进退出单据对应的原入库单据的业务单据编号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Rp_Cate",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "退货类别\n1：合格\n2：不合格\n3：不限定",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Invoice_Time",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "制单时间",
                                "example": "2023-11-24 22:28:22",
                                "children": null
                            },
                            {
                                "paramName": "purchase_return_mode_code ",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "购退方式\n字典值，值有：1供应商取货，2委托运输\n默认值：1",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Goods_Value",
                                "paramType": "decimal",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "商品价值\n需出库配送时，填写商品价值后根据商品价值保价",
                                "example": 10.0,
                                "children": null
                            },
                            {
                                "paramName": "cc_accessorial_service_item_code",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "仓储增值服务编码\n字典值，值有：XCFW卸车服务",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Valid_Until",
                                "paramType": "date",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "有效期\n批号不为空时，有效期不能为空",
                                "example": "2025-03-31",
                                "children": null
                            },
                            {
                                "paramName": "Remarks",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "备注",
                                "example": "席元波测试",
                                "children": null
                            },
                            {
                                "paramName": "Outbaddress_Id",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "出库地址ID",
                                "example": "3762188888888819",
                                "children": null
                            },
                            {
                                "paramName": "Aging",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "时效\n24\n48\n72\n96\n120",
                                "example": "24",
                                "children": null
                            },
                            {
                                "paramName": "fee_con_id",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "计费委托方id",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Is_Sceneprint",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "是否现场打印\nN：否\nY：是",
                                "example": "N",
                                "children": null
                            },
                            {
                                "paramName": "Is_Receipt",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "是否回单\nN：否\nY：是",
                                "example": "N",
                                "children": null
                            },
                            {
                                "paramName": "Ssa_No",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "客户编号",
                                "example": "K998",
                                "children": null
                            },
                            {
                                "paramName": "Con_Id",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "委托方ID",
                                "example": "16368478644982411",
                                "children": null
                            },
                            {
                                "paramName": "channel_type",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "渠道类型\nZD:终端\nQT:其他",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Invoice_Staff",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "制单员\n方式一：对接职员资料，传职员编号，可默认传委托方管理员职员编号\n方式二：不对接职员资料，直接传职员名称",
                                "example": "MACF",
                                "children": null
                            },
                            {
                                "paramName": "Kilometers",
                                "paramType": "decimal",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "公里数",
                                "example": 0.0,
                                "children": null
                            },
                            {
                                "paramName": "ys_accessorial_service_item_code",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "运输增值服务编码\n字典值，值有：SMTH上门提货、SHSM送货上门、HDQS回单签收、HWBX货物保险",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Amount",
                                "paramType": "decimal",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "金额",
                                "example": 20.0,
                                "children": null
                            },
                            {
                                "paramName": "Operator_Id",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "运营方ID",
                                "example": "272928273441075",
                                "children": null
                            },
                            {
                                "paramName": "Sale_Type",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "销售类型\n1：销售出库\n4：购进退出",
                                "example": "1",
                                "children": null
                            },
                            {
                                "paramName": "Goods_No",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "商品编号",
                                "example": "04743",
                                "children": null
                            },
                            {
                                "paramName": "Ldc_Id",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "物流中心ID",
                                "example": "69025125577859411",
                                "children": null
                            },
                            {
                                "paramName": "Delivery_Address_Id",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "送货地址ID\n1.传地址资料接口中对接的Address_Old_Id\n2.不传默认取客户的默认配送地址",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "insurance_amount",
                                "paramType": "decimal",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "投保金额",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Price",
                                "paramType": "decimal",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "单价",
                                "example": 10.0,
                                "children": null
                            },
                            {
                                "paramName": "Outbound_Mode",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "出库方式\n1：出库待配\n2：出库配送",
                                "example": "2",
                                "children": null
                            },
                            {
                                "paramName": "Bill_Dtl_Id",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "行号",
                                "example": "1",
                                "children": null
                            },
                            {
                                "paramName": "Goods_Lotno",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "商品批号\n销售类型=购进退出时，需传输此字段，出库订单可传可不传",
                                "example": "1704116",
                                "children": null
                            },
                            {
                                "paramName": "Delivery_Time",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "送货日期",
                                "example": "2023-12-16",
                                "children": null
                            },
                            {
                                "paramName": "Takegoods_Mode",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "提货方式\n1：自提\n3：托运\n4：市内配送",
                                "example": "4",
                                "children": null
                            },
                            {
                                "paramName": "outbound_type",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "出库方式\n字典值，值有：1出库自提、2出库配送\n默认值：1",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Goods_Type",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "产品大类\n1：西药\n2：中药(小袋)\n3：计生\n4：器械\n5：原料药\n6：第三方\n7：赠品\n8：冷藏品\n9：阴凉品\n10：消费品\n11：消费品\n12：可混开\n13：中药(大袋)\n\n山西公司按照以下标准传值:\n0：保健食品\n1：西药\n2：中药\n3：计生\n4： 器械\n5：原料药\n6：第三方\n7：赠品\n8：三方合流\n9：食品",
                                "example": "8",
                                "children": null
                            }
                        ]
                    }
                ]
            }
        ],
        "responseParamList": null,
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "oshOrderPlan",
            "method": "post",
            "apiUrl": "/api-general/v1/oshOrderPlan",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"func_type\":\"saveData\",\"json_data\":[{\"Biz_Bill_No\":\"CKCS2023102756\",\"Production_Date\":\"2023-03-31\",\"payer_mode\":\"\",\"Rp_Reasons\":\"\",\"Outnbound_Quantity\":2.0,\"danjxc_side\":\"1\",\"Instorebill_No\":\"\",\"Rp_Cate\":\"\",\"Invoice_Time\":\"2023-11-24 22:28:22\",\"purchase_return_mode_code \":\"\",\"Goods_Value\":10.0,\"cc_accessorial_service_item_code\":\"\",\"Valid_Until\":\"2025-03-31\",\"Remarks\":\"席元波测试\",\"Outbaddress_Id\":\"3762188888888819\",\"Aging\":\"24\",\"fee_con_id\":\"\",\"Is_Sceneprint\":\"N\",\"Is_Receipt\":\"N\",\"Ssa_No\":\"K998\",\"Con_Id\":\"16368478644982411\",\"channel_type\":\"\",\"Invoice_Staff\":\"MACF\",\"Kilometers\":0.0,\"ys_accessorial_service_item_code\":\"\",\"Amount\":20.0,\"Operator_Id\":\"272928273441075\",\"Sale_Type\":\"1\",\"Goods_No\":\"04743\",\"Ldc_Id\":\"69025125577859411\",\"Delivery_Address_Id\":\"\",\"insurance_amount\":\"\",\"Price\":10.0,\"Outbound_Mode\":\"2\",\"Bill_Dtl_Id\":\"1\",\"Goods_Lotno\":\"1704116\",\"Delivery_Time\":\"2023-12-16\",\"Takegoods_Mode\":\"4\",\"outbound_type\":\"\",\"Goods_Type\":\"8\"}]}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/api-general/v1/stplOrderPlan",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "报升报损计划推送",
        "serviceCode": "stplOrderPlan",
        "shareDesc": "报升报损计划推送",
        "apiDocTypeId": 32,
        "description": "推送报升、报损订单到九州通",
        "apiDesc": "推送报升、报损订单到九州通",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "func_type",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "saveData",
                "example": "saveData",
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "stplOrderPlan",
                "paramLocation": "body",
                "isNeed": "否",
                "description": null,
                "example": null,
                "children": [
                    {
                        "paramName": "Storage_Quantity",
                        "paramType": "decimal",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "数量",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Biz_Bill_No",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "业务单号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Production_Date",
                        "paramType": "date",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "生产日期",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Amount",
                        "paramType": "decimal",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "金额",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Reasons",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "报升报损原因",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Operator_Id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "运营方ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Invoice_Time",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "开票时间",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Goods_No",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "商品编号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Ldc_Id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "物流中心ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Stock_Status",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "单据状态\n1：合格\n2：不合格\n3：待验\n4：停售\n5：虚拟\n6：在库待验\n8：拒收\n9：在库待验\n20：移仓在途",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Valid_Until",
                        "paramType": "date",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "有效期",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Price",
                        "paramType": "decimal",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "单价",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Bill_Dtl_Id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "明细行号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Download_Side",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "单据下传方",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Goods_Lotno",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "批号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Con_Id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "委托方ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Invoice_Staff",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "开票员",
                        "example": null,
                        "children": null
                    }
                ]
            }
        ],
        "responseParamList": null,
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "stplOrderPlan",
            "method": "post",
            "apiUrl": "/api-general/v1/stplOrderPlan",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"func_type\":\"saveData\",\"json_data\":{\"Storage_Quantity\":\"\",\"Biz_Bill_No\":\"\",\"Production_Date\":\"\",\"Amount\":\"\",\"Reasons\":\"\",\"Operator_Id\":\"\",\"Invoice_Time\":\"\",\"Goods_No\":\"\",\"Ldc_Id\":\"\",\"Stock_Status\":\"\",\"Valid_Until\":\"\",\"Price\":\"\",\"Bill_Dtl_Id\":\"\",\"Download_Side\":\"\",\"Goods_Lotno\":\"\",\"Con_Id\":\"\",\"Invoice_Staff\":\"\"}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/api-general/v1/oshOrderPlanCancel",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "出库计划取消",
        "serviceCode": "ckjhqx",
        "shareDesc": "出库计划取消",
        "apiDocTypeId": 32,
        "description": "已推送到九州通的销售出库订单、购进退出订单需要取消时，通过此接口进行取消",
        "apiDesc": "已推送到九州通的销售出库订单、购进退出订单需要取消时，通过此接口进行取消",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "func_type",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "saveData",
                "example": "saveData",
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "oshOrderPlanCancel",
                "paramLocation": "body",
                "isNeed": "否",
                "description": null,
                "example": null,
                "children": [
                    {
                        "paramName": "biz_bill_no",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "业务单据编号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "operator_id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "运营方ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "con_id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "委托方ID",
                        "example": null,
                        "children": null
                    }
                ]
            }
        ],
        "responseParamList": null,
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "ckjhqx",
            "method": "post",
            "apiUrl": "/api-general/v1/oshOrderPlanCancel",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"func_type\":\"saveData\",\"json_data\":{\"biz_bill_no\":\"\",\"operator_id\":\"\",\"con_id\":\"\"}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/openapi/v2/OMS_STOCKSHARING_SAVE",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "库存共享单推送",
        "serviceCode": "OMS_STOCKSHARING_SAVE",
        "shareDesc": "库存共享单推送",
        "apiDocTypeId": 32,
        "description": "库存共享单推送",
        "apiDesc": "库存共享单推送",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "partner_id",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "合作伙伴编码(即顾客编码),和token一起生成",
                "example": null,
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "KCGXDTS1",
                "paramLocation": "body",
                "isNeed": "否",
                "description": "保存内容",
                "example": null,
                "children": [
                    {
                        "paramName": "hdr",
                        "paramType": "KCGXDTShdr1",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "汇总json组",
                        "example": null,
                        "children": [
                            {
                                "paramName": "ssa_no",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主客户编号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "erp_source",
                                "paramType": "string(30)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "上游系统订单来源（erp_source）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "usage_name_purchase",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "采购用途名称",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "contactperson",
                                "paramType": "string(128)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "收件人",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "borg_id_purchase",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "采购业务组织id",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "operator_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "运营方ID（可以不传，绑定账户）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "store_no",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主仓库编号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "con_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "supplier_no",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主供应商编号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "danjxc_side",
                                "paramType": "string(10)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "单据下传方",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "invoice_time",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "制单时间",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "business_staff",
                                "paramType": "string(60)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "业务员（传中文名称）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "is_sharingbill",
                                "paramType": "string(2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "是否库存共享订单（0：否",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "businessbill_no_sale",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "销售业务单号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "sharingstore_no",
                                "paramType": "string(255)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "共享仓库编号（原出库单的仓库NO,ERP的branch_id）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "platform_order_no",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "平台订单号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "usage_name_sale",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "销售用途名称",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "ldc_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "物流中心ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "borg_id_sale",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "销售业务组织id",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "businessbill_no sale old",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "原销售单号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "businessbill_no",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "库存共享单号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "contactprovince",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "收件人省",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "contactarea",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "收件人区",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "contactphone",
                                "paramType": "string(400)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "收件人电话",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "channel_type",
                                "paramType": "string(5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "渠道类型（ZD：终端；QT：其它）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "borg_name_sale",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "销售业务组织名称",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "platform_bill_num",
                                "paramType": "integer",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "平台订单数",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "erp_platform_bill_num",
                                "paramType": "integer",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "平台子单数\t",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "con_no",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主编号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "transport_goodsmode",
                                "paramType": "string(2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "运输模式（00：不确定\n01：自配",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "erp_platform_bill_no",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "平台子单号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "takegoods_mode",
                                "paramType": "string(10)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "提货方式（1：自提\n3：托运（库存共享托运3转21）\n4：市内配送(库存共享市内配送4转19)\n5：市外配送(库存共享市外配送5转20)\n6：调拨\n10：消费品托运\n17：托运（KD）\n默认传自提）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "ssa_code",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主客户ID（无ID的货主，客户编号、货主客户ID传同一个值即可。）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "erp_branchid",
                                "paramType": "string(30)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "上游系统分公司标识ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "buyer",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "采购员",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "businessbill_no_purchase",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "采购业务单号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "usage_id_purchase",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "采购用途id",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "borg_name_purchase",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "采购业务组织名称",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "invoice_staff",
                                "paramType": "string(60)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "制单员",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_type",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "商品类型（1：西药\n2：中药\n3：计生\n4：器械\n5：原料药\n6：第三方\n7：赠品\n10：消费品\n12：可混开\n13：中药(大袋)\n23：食品\n27：基药\n28：保健食品\n29：原料药中间体\n30：化工品）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "aging",
                                "paramType": "string(2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "时效类型（01：配中\n02：当日达",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "usage_id_sale",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "销售用途id",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "consigneeadd",
                                "paramType": "string(400)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "收件人详细地址",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "supplier_code",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主供应商ID（无ID的货主，客户编号、货主客户ID传同一个值即可。）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "contactcity",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "收件人市",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "relevant_warehouse_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "内转仓库ID（原出库单的仓库ID,ERP的仓库ID）",
                                "example": "",
                                "children": null
                            }
                        ]
                    },
                    {
                        "paramName": "dtls",
                        "paramType": "array[KCGXDTSdtl1]",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "明细json组",
                        "example": null,
                        "children": [
                            {
                                "paramName": "sterilization_lotno",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "灭菌批号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "price_purchase",
                                "paramType": "decimal(22.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "购进单价",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "sorg_name",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "库存组织名称",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "stock_status",
                                "paramType": "string(1)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "库存状态（1 合格\n2 不合格",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "amount_purchase",
                                "paramType": "decimal(22.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "购进金额",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "sorg_id",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "库存组织id",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "lotno_request",
                                "paramType": "string(30)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "批号要求（1：单一批号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_lotno",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "批号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "approval_no",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "批准文号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_code",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主商品id（无ID的货主，商品编号、货主商品ID传同一个值即可。）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_no",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "商品编号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "production_date",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "生产日期",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "bill_dtl_no",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "明细行号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "valid_until",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "有效期",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "actual_qty",
                                "paramType": "decimal(14.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "数量",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "price_sale",
                                "paramType": "decimal(22.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "销售单价",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "amount_sale",
                                "paramType": "decimal(22.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "销售金额",
                                "example": null,
                                "children": null
                            }
                        ]
                    }
                ]
            }
        ],
        "responseParamList": null,
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "OMS_STOCKSHARING_SAVE",
            "method": "post",
            "apiUrl": "/openapi/v2/OMS_STOCKSHARING_SAVE",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"partner_id\":\"\",\"json_data\":{\"hdr\":{\"ssa_no\":\"\",\"erp_source\":\"\",\"usage_name_purchase\":\"\",\"contactperson\":\"\",\"borg_id_purchase\":\"\",\"operator_id\":\"\",\"store_no\":\"\",\"con_id\":\"\",\"supplier_no\":\"\",\"danjxc_side\":\"\",\"invoice_time\":\"\",\"business_staff\":\"\",\"is_sharingbill\":\"\",\"businessbill_no_sale\":\"\",\"sharingstore_no\":\"\",\"platform_order_no\":\"\",\"usage_name_sale\":\"\",\"ldc_id\":\"\",\"borg_id_sale\":\"\",\"businessbill_no sale old\":\"\",\"businessbill_no\":\"\",\"contactprovince\":\"\",\"contactarea\":\"\",\"contactphone\":\"\",\"channel_type\":\"\",\"borg_name_sale\":\"\",\"platform_bill_num\":\"\",\"erp_platform_bill_num\":\"\",\"con_no\":\"\",\"transport_goodsmode\":\"\",\"erp_platform_bill_no\":\"\",\"takegoods_mode\":\"\",\"ssa_code\":\"\",\"erp_branchid\":\"\",\"buyer\":\"\",\"businessbill_no_purchase\":\"\",\"usage_id_purchase\":\"\",\"borg_name_purchase\":\"\",\"invoice_staff\":\"\",\"goods_type\":\"\",\"aging\":\"\",\"usage_id_sale\":\"\",\"consigneeadd\":\"\",\"supplier_code\":\"\",\"contactcity\":\"\",\"relevant_warehouse_id\":\"\"},\"dtls\":[{\"sterilization_lotno\":\"\",\"price_purchase\":\"\",\"sorg_name\":\"\",\"stock_status\":\"\",\"amount_purchase\":\"\",\"sorg_id\":\"\",\"lotno_request\":\"\",\"goods_lotno\":\"\",\"approval_no\":\"\",\"goods_code\":\"\",\"goods_no\":\"\",\"production_date\":\"\",\"bill_dtl_no\":\"\",\"valid_until\":\"\",\"actual_qty\":\"\",\"price_sale\":\"\",\"amount_sale\":\"\"}]}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/api-general/v1/dw",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "客户资料推送",
        "serviceCode": "dw",
        "shareDesc": "客户资料推送",
        "apiDocTypeId": 32,
        "description": "推送供应商资料、客户资料到九州通。",
        "apiDesc": "推送供应商资料、客户资料到九州通。",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "json_data",
                "paramType": "dwList",
                "paramLocation": "body",
                "isNeed": "否",
                "description": null,
                "example": null,
                "children": [
                    {
                        "paramName": "func_type",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": null,
                        "example": "saveData",
                        "children": null
                    },
                    {
                        "paramName": "json_data",
                        "paramType": "array[dw]",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": null,
                        "example": null,
                        "children": [
                            {
                                "paramName": "mtaManufacturerLicense_ValidUntil",
                                "paramType": "date",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "器械经营许可证有效期至",
                                "example": "2025-10-24",
                                "children": null
                            },
                            {
                                "paramName": "Business_Licence_No",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "营业执照号",
                                "example": "55555",
                                "children": null
                            },
                            {
                                "paramName": "Ssa_Shortname",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "客户简称",
                                "example": "cs1",
                                "children": null
                            },
                            {
                                "paramName": "Address",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "仓库地址    配送用的",
                                "example": "18627883279",
                                "children": null
                            },
                            {
                                "paramName": "Yew_Staff",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "业务员",
                                "example": "张三",
                                "children": null
                            },
                            {
                                "paramName": "Production_License_No",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "生产/经营许可证号",
                                "example": "55555",
                                "children": null
                            },
                            {
                                "paramName": "Creator",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "申请人",
                                "example": "305828464622808",
                                "children": null
                            },
                            {
                                "paramName": "Address_Shortname",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "地址简称",
                                "example": "12334324234234",
                                "children": null
                            },
                            {
                                "paramName": "Is_Active",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "是否活动",
                                "example": "Y",
                                "children": null
                            },
                            {
                                "paramName": "Download_Side",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "单据下传方  默认值1",
                                "example": "1",
                                "children": null
                            },
                            {
                                "paramName": "Production_License_No_Valid_Until",
                                "paramType": "date",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "生产/经营许可证号有效期至",
                                "example": "2025-10-24",
                                "children": null
                            },
                            {
                                "paramName": "Ssa_Name",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "客户名称",
                                "example": "测试名称1",
                                "children": null
                            },
                            {
                                "paramName": "Ssa_No",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "客户编号",
                                "example": "DSFHNTXDSF001",
                                "children": null
                            },
                            {
                                "paramName": "Updated_Time",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "修改时间",
                                "example": "2023-10-24 22:28:22",
                                "children": null
                            },
                            {
                                "paramName": "Con_Id",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "委托方ID",
                                "example": "16368478644982411",
                                "children": null
                            },
                            {
                                "paramName": "registrationCertificateLicense",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "备案凭证编号",
                                "example": "55555",
                                "children": null
                            },
                            {
                                "paramName": "registrationCertificateLicense_ValidUntil",
                                "paramType": "date",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "备案凭证编号有效期至",
                                "example": "2025-10-24",
                                "children": null
                            },
                            {
                                "paramName": "Status",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "状态\n1：未审核\n2：审核通过\n3：审核未通过\n4：审批通过\n5：审批未通过\n0：刚生成",
                                "example": "2",
                                "children": null
                            },
                            {
                                "paramName": "LIUS_NO",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "流水号  主键,不允许重复",
                                "example": "1",
                                "children": null
                            },
                            {
                                "paramName": "Created_Time",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "申请时间",
                                "example": "2023-10-24 22:28:22",
                                "children": null
                            },
                            {
                                "paramName": "Is_Default",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "是否默认配送地址",
                                "example": "Y",
                                "children": null
                            },
                            {
                                "paramName": "Contact_Phone",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "联系人联系方式  配送用的",
                                "example": "18627883279",
                                "children": null
                            },
                            {
                                "paramName": "GMP_License",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "GMP证件/GSP证件",
                                "example": "55555",
                                "children": null
                            },
                            {
                                "paramName": "medicalInstitutionLicense_ValidUntil",
                                "paramType": "date",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "医疗机构有效期至",
                                "example": "2025-10-24",
                                "children": null
                            },
                            {
                                "paramName": "Ssa_Sign",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "客户标示（上游、下游）  1：上游，2:下游",
                                "example": "2",
                                "children": null
                            },
                            {
                                "paramName": "Mnemonic_Code",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "客户助记码",
                                "example": "CSMC1",
                                "children": null
                            },
                            {
                                "paramName": "Business_Licence_No_Valid_Until",
                                "paramType": "date",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "营业执照号有效期至",
                                "example": "2025-10-24",
                                "children": null
                            },
                            {
                                "paramName": "Contact_Name",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "联系人  配送用的",
                                "example": "张三",
                                "children": null
                            },
                            {
                                "paramName": "Bankaccount",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "银行账号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "medicalInstitutionLicense",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "医疗机构许可证",
                                "example": "55555",
                                "children": null
                            },
                            {
                                "paramName": "circulationPermitLicense",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "流通许可证",
                                "example": "55555",
                                "children": null
                            },
                            {
                                "paramName": "Yew_Staff_Phone",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "业务员电话",
                                "example": "18627883279",
                                "children": null
                            },
                            {
                                "paramName": "circulationPermitLicense_ValidUntil",
                                "paramType": "date",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "流通许可证有效期至",
                                "example": "2025-10-24",
                                "children": null
                            },
                            {
                                "paramName": "Is_Hospital_Customer",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "是否医院客户",
                                "example": "N",
                                "children": null
                            },
                            {
                                "paramName": "GMP_License_Valid_Until",
                                "paramType": "date",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "GMP效期/GSP效期",
                                "example": "2025-10-24",
                                "children": null
                            },
                            {
                                "paramName": "Ssa_Addr_Phone",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "客户注册地址",
                                "example": "11111",
                                "children": null
                            },
                            {
                                "paramName": "mtaManufacturerLicense",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "器械经营许可证",
                                "example": "55555",
                                "children": null
                            }
                        ]
                    }
                ]
            }
        ],
        "responseParamList": null,
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "dw",
            "method": "post",
            "apiUrl": "/api-general/v1/dw",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"func_type\":\"saveData\",\"json_data\":[{\"mtaManufacturerLicense_ValidUntil\":\"2025-10-24\",\"Business_Licence_No\":\"55555\",\"Ssa_Shortname\":\"cs1\",\"Address\":\"18627883279\",\"Yew_Staff\":\"张三\",\"Production_License_No\":\"55555\",\"Creator\":\"305828464622808\",\"Address_Shortname\":\"12334324234234\",\"Is_Active\":\"Y\",\"Download_Side\":\"1\",\"Production_License_No_Valid_Until\":\"2025-10-24\",\"Ssa_Name\":\"测试名称1\",\"Ssa_No\":\"DSFHNTXDSF001\",\"Updated_Time\":\"2023-10-24 22:28:22\",\"Con_Id\":\"16368478644982411\",\"registrationCertificateLicense\":\"55555\",\"registrationCertificateLicense_ValidUntil\":\"2025-10-24\",\"Status\":\"2\",\"LIUS_NO\":\"1\",\"Created_Time\":\"2023-10-24 22:28:22\",\"Is_Default\":\"Y\",\"Contact_Phone\":\"18627883279\",\"GMP_License\":\"55555\",\"medicalInstitutionLicense_ValidUntil\":\"2025-10-24\",\"Ssa_Sign\":\"2\",\"Mnemonic_Code\":\"CSMC1\",\"Business_Licence_No_Valid_Until\":\"2025-10-24\",\"Contact_Name\":\"张三\",\"Bankaccount\":\"\",\"medicalInstitutionLicense\":\"55555\",\"circulationPermitLicense\":\"55555\",\"Yew_Staff_Phone\":\"18627883279\",\"circulationPermitLicense_ValidUntil\":\"2025-10-24\",\"Is_Hospital_Customer\":\"N\",\"GMP_License_Valid_Until\":\"2025-10-24\",\"Ssa_Addr_Phone\":\"11111\",\"mtaManufacturerLicense\":\"55555\"}]}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/api-general/v1/kc",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "批号库存查询",
        "serviceCode": "kccx",
        "shareDesc": "批号库存查询",
        "apiDocTypeId": 32,
        "description": "仓库实时批号库存查询接口",
        "apiDesc": "仓库实时批号库存查询接口",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "func_type",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "select",
                "example": "select",
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "kc",
                "paramLocation": "body",
                "isNeed": "否",
                "description": null,
                "example": null,
                "children": [
                    {
                        "paramName": "Ldc_Id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "物流中心ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Stock_Status",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "库存状态",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Operator_Id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "运营方ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Con_Id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "委托方ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Goods_No",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "商品编号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Lot_No",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "批号",
                        "example": null,
                        "children": null
                    }
                ]
            }
        ],
        "responseParamList": [
            {
                "statusCode": "200",
                "paramName": null,
                "paramType": "kcResponse",
                "description": "库存查询成功",
                "children": [
                    {
                        "statusCode": null,
                        "paramName": "Package_Unit",
                        "paramType": "string",
                        "description": "包装单位",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Goods_Id",
                        "paramType": "string",
                        "description": "商品ID",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Production_Date",
                        "paramType": "date",
                        "description": "生产日期",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Package_Qty",
                        "paramType": "integer",
                        "description": "包装数量",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Drug_Spec",
                        "paramType": "string",
                        "description": "药品规格",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Operator_Id",
                        "paramType": "string",
                        "description": "运营方ID",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Goods_No",
                        "paramType": "string",
                        "description": "商品编号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Goods_Name",
                        "paramType": "string",
                        "description": "中文名",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Lot_No",
                        "paramType": "string",
                        "description": "批号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Stock_Quantity",
                        "paramType": "decimal",
                        "description": "库存数量",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Ldc_Id",
                        "paramType": "string",
                        "description": "物流中心ID",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "In_Transit_Quantity",
                        "paramType": "decimal",
                        "description": "在途数量",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Stock_Status",
                        "paramType": "string",
                        "description": "库存状态",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Valid_Until",
                        "paramType": "date",
                        "description": "有效期",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Inbound_Quantity",
                        "paramType": "decimal",
                        "description": "入库数量",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Manufacturer",
                        "paramType": "string",
                        "description": "生产厂家",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Con_Id",
                        "paramType": "string",
                        "description": "委托方ID",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Outbound_Quantity",
                        "paramType": "decimal",
                        "description": "出库数量",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Approval_No",
                        "paramType": "string",
                        "description": "批准文号",
                        "children": null
                    }
                ]
            }
        ],
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "kccx",
            "method": "post",
            "apiUrl": "/api-general/v1/kc",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"func_type\":\"select\",\"json_data\":{\"Ldc_Id\":\"\",\"Stock_Status\":\"\",\"Operator_Id\":\"\",\"Con_Id\":\"\",\"Goods_No\":\"\",\"Lot_No\":\"\"}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/api-general/v1/goodsBack",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "商品召回追回指令推送",
        "serviceCode": "goodsback",
        "shareDesc": "商品召回追回指令推送",
        "apiDocTypeId": 32,
        "description": "推送商品召回追回指令到九州通仓库",
        "apiDesc": "推送商品召回追回指令到九州通仓库",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "func_type",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "saveData",
                "example": "saveData",
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "goodsBack",
                "paramLocation": "body",
                "isNeed": "否",
                "description": null,
                "example": null,
                "children": [
                    {
                        "paramName": "end_date",
                        "paramType": "date",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "结束日期",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "plan_back_qty",
                        "paramType": "decimal",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "计划召回数量",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "goods_lotno",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "商品批号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "operator_id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "运营方ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "con_id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "委托方ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "goods_no",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "商品编号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "production_date",
                        "paramType": "date",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "生产日期",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "invoice_time",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "制单时间",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "download_side",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "单据下传方",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "valid_until",
                        "paramType": "date",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "有效期",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "ldc_id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "物流中心ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "businessbill_no",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "业务单据编号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "back_reason",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "召回原因",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "bill_dtl_id_old",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "行号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "effective_date",
                        "paramType": "date",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "生效日期",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "invoice_staff",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "制单员",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "remarks",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "备注",
                        "example": null,
                        "children": null
                    }
                ]
            }
        ],
        "responseParamList": null,
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "goodsback",
            "method": "post",
            "apiUrl": "/api-general/v1/goodsBack",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"func_type\":\"saveData\",\"json_data\":{\"end_date\":\"\",\"plan_back_qty\":\"\",\"goods_lotno\":\"\",\"operator_id\":\"\",\"con_id\":\"\",\"goods_no\":\"\",\"production_date\":\"\",\"invoice_time\":\"\",\"download_side\":\"\",\"valid_until\":\"\",\"ldc_id\":\"\",\"businessbill_no\":\"\",\"back_reason\":\"\",\"bill_dtl_id_old\":\"\",\"effective_date\":\"\",\"invoice_staff\":\"\",\"remarks\":\"\"}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/api-general/v1/dz",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "地址资料保存",
        "serviceCode": "dzzlcx",
        "shareDesc": "地址资料保存",
        "apiDocTypeId": 32,
        "description": "地址资料保存接口",
        "apiDesc": "地址资料保存接口",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "json_data",
                "paramType": "dzzl",
                "paramLocation": "body",
                "isNeed": "否",
                "description": null,
                "example": null,
                "children": [
                    {
                        "paramName": "func_type",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "例：saveData",
                        "example": "",
                        "children": null
                    },
                    {
                        "paramName": "json_data",
                        "paramType": "array[dzzlbc]",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "字段内容",
                        "example": null,
                        "children": [
                            {
                                "paramName": "Address_Type ",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "地址类型",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "Province ",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "省 ",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "Address",
                                "paramType": "string(500)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "详细地址 ",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "Created_Time",
                                "paramType": "date",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "创建时间",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Is_Default",
                                "paramType": "string(1)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "是否默认配送地址 （默认否）",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "Village ",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "村",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "Creator",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "创建人",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "Operator_Id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "运营方 ID",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "Con_Id ",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "委托方 ID",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "Address_Old_Id ",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "旧地址 ID \n传地址编号 ",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "Contact_Name",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "联系人",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "Street ",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "街道",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "Ssa_Id_Old ",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "旧单位 ID\n若 Address_Type 为 \n3，此字段允许为空 ",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "Is_Active ",
                                "paramType": "string(1)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "是否活动",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "City ",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "市",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "Address_Shortname ",
                                "paramType": "string(500)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "地址简称",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "Inf_Order ",
                                "paramType": "integer",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "流水号 \n主键,不允许重复",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Town",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "乡/镇 ",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "Remarks",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "备注",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "Contact_Phone ",
                                "paramType": "string(80)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "联系人联系方式",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "Region",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "区域（大陆、港澳 \n台、国外）/省/市 \n/区/街道",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "Area ",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "区",
                                "example": "",
                                "children": null
                            }
                        ]
                    }
                ]
            }
        ],
        "responseParamList": null,
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "dzzlcx",
            "method": "post",
            "apiUrl": "/api-general/v1/dz",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"func_type\":\"\",\"json_data\":[{\"Address_Type \":\"\",\"Province \":\"\",\"Address\":\"\",\"Created_Time\":\"\",\"Is_Default\":\"\",\"Village \":\"\",\"Creator\":\"\",\"Operator_Id\":\"\",\"Con_Id \":\"\",\"Address_Old_Id \":\"\",\"Contact_Name\":\"\",\"Street \":\"\",\"Ssa_Id_Old \":\"\",\"Is_Active \":\"\",\"City \":\"\",\"Address_Shortname \":\"\",\"Inf_Order \":\"\",\"Town\":\"\",\"Remarks\":\"\",\"Contact_Phone \":\"\",\"Region\":\"\",\"Area \":\"\"}]}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/api-general/v1/ishOrderExpressNo",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "入库计划快递单号推送",
        "serviceCode": "rkjhkddhts",
        "shareDesc": "入库计划快递单号推送",
        "apiDocTypeId": 32,
        "description": "推送入库订单的快递单号到九州通。",
        "apiDesc": "推送入库订单的快递单号到九州通。",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "func_type",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "saveData",
                "example": "saveData",
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "ishOrderExpressNo",
                "paramLocation": "body",
                "isNeed": "否",
                "description": null,
                "example": null,
                "children": [
                    {
                        "paramName": "ssa_no",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "客户编号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "ldc_id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "物流中心ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "businessbill_no",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "业务单据编号  主键",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "operator_id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "运营方ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "con_id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "委托方ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "business_type",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "入库类型  1:正常入库 4:销售退回",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "invoice_time",
                        "paramType": "dateTime",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "下传时间",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "express_no",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "快递单号",
                        "example": null,
                        "children": null
                    }
                ]
            }
        ],
        "responseParamList": null,
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "rkjhkddhts",
            "method": "post",
            "apiUrl": "/api-general/v1/ishOrderExpressNo",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"func_type\":\"saveData\",\"json_data\":{\"ssa_no\":\"\",\"ldc_id\":\"\",\"businessbill_no\":\"\",\"operator_id\":\"\",\"con_id\":\"\",\"business_type\":\"\",\"invoice_time\":\"\",\"express_no\":\"\"}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/api-general/v1/rksc",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "采购入库回传",
        "serviceCode": "cgrkhc",
        "shareDesc": "采购入库回传",
        "apiDocTypeId": 32,
        "description": "从九州通获取采购入库订单的入库记录数据",
        "apiDesc": "从九州通获取采购入库订单的入库记录数据",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "json_data",
                "paramType": "rkscList",
                "paramLocation": "body",
                "isNeed": "否",
                "description": null,
                "example": null,
                "children": [
                    {
                        "paramName": "func_type",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": null,
                        "example": "select",
                        "children": null
                    },
                    {
                        "paramName": "json_data",
                        "paramType": "rksc",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": null,
                        "example": null,
                        "children": [
                            {
                                "paramName": "Ldc_Id",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "物流中心ID",
                                "example": "690251255778594",
                                "children": null
                            },
                            {
                                "paramName": "Business_Type",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "业务类型",
                                "example": "1",
                                "children": null
                            },
                            {
                                "paramName": "Businessbill_No",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "业务单据编号",
                                "example": "JHF01201998",
                                "children": null
                            },
                            {
                                "paramName": "Operator_Id",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "运营方ID",
                                "example": "174660684877367",
                                "children": null
                            },
                            {
                                "paramName": "Con_Id",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "委托方ID",
                                "example": "163684786449824",
                                "children": null
                            },
                            {
                                "paramName": "Invoice_Staff",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": null,
                                "example": null,
                                "children": null
                            }
                        ]
                    }
                ]
            }
        ],
        "responseParamList": [
            {
                "statusCode": "200",
                "paramName": null,
                "paramType": "rkscResponse",
                "description": "采购入库回传成功",
                "children": [
                    {
                        "statusCode": null,
                        "paramName": "SpotCheck_Qty",
                        "paramType": "decimal",
                        "description": "抽检数量",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "SpecificationsCheck",
                        "paramType": "string",
                        "description": "说明书检查",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Arrival_Mode",
                        "paramType": "string",
                        "description": "到货方式",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Storage_Type",
                        "paramType": "string",
                        "description": "入库类型",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Rp_Reasons",
                        "paramType": "string",
                        "description": "退货原因",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Auditor_Time",
                        "paramType": "dateTime",
                        "description": "审核时间",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Auditor",
                        "paramType": "string",
                        "description": "单据审核人",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "UnQualified_Qty",
                        "paramType": "decimal",
                        "description": "验收不合格数量",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Remarks",
                        "paramType": "string",
                        "description": "备注",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Aging",
                        "paramType": "string",
                        "description": "时效",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "InstoreBill_No_LMIS",
                        "paramType": "string",
                        "description": "LMIS作业单号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Con_Id",
                        "paramType": "string",
                        "description": "委托方ID",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Storage_Quantity",
                        "paramType": "decimal",
                        "description": "入库数量",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Acceptance_Check_Date",
                        "paramType": "dateTime",
                        "description": "验收时间",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Transport_Mode",
                        "paramType": "string",
                        "description": "运输方式(工具)",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "OutPackingCheck",
                        "paramType": "string",
                        "description": "外包装检查",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Tdeladdress_Id",
                        "paramType": "string",
                        "description": "提货地址ID",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Bill_Hdr_Id",
                        "paramType": "string",
                        "description": "单据ID",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Bill_Dtl_Id_Old",
                        "paramType": "string",
                        "description": "客户原始行号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Takegds_Time",
                        "paramType": "dateTime",
                        "description": "接货时间",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Price",
                        "paramType": "decimal",
                        "description": "单价",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Quality_Inspector",
                        "paramType": "string",
                        "description": "质检员",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Bill_Dtl_Id",
                        "paramType": "string",
                        "description": "行号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Outstorebill_No",
                        "paramType": "string",
                        "description": "出库单号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Goods_Lotno",
                        "paramType": "string",
                        "description": "商品批号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Tprt_Record",
                        "paramType": "string",
                        "description": "到货温度(验收温度)",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Biz_Bill_No",
                        "paramType": "string",
                        "description": "业务单据编号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Production_Date",
                        "paramType": "date",
                        "description": "生产日期",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "VisForeignMatter",
                        "paramType": "string",
                        "description": "可见异物检查",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Is_Stock",
                        "paramType": "string",
                        "description": "是否记账",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Bill_Dtl_Id_jzyc",
                        "paramType": "string",
                        "description": "九州通明细ID",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "recorderNo",
                        "paramType": "string",
                        "description": "记录仪型号或编号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Tprt_Mode",
                        "paramType": "string",
                        "description": "温控方式",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Invoice_Time",
                        "paramType": "dateTime",
                        "description": "开票时间",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Departure_Address",
                        "paramType": "string",
                        "description": "启运地点",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Goods_Value",
                        "paramType": "dateTime",
                        "description": "商品价值",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Vehicle_No",
                        "paramType": "string",
                        "description": "车牌号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Receiving_Clerk",
                        "paramType": "string",
                        "description": "收货员",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Valid_Until",
                        "paramType": "date",
                        "description": "有效期",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Qualified_Qty",
                        "paramType": "decimal",
                        "description": "验收合格数量",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Transport_Ssa",
                        "paramType": "string",
                        "description": "运输单位",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Treatment_Measures",
                        "paramType": "string",
                        "description": "处理措施",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Ssa_No",
                        "paramType": "string",
                        "description": "客户编号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Storageaddress_Id",
                        "paramType": "string",
                        "description": "入库地址ID",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Invoice_Staff",
                        "paramType": "string",
                        "description": "开票员",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Acceptance_Check_Rlt",
                        "paramType": "string",
                        "description": "验收评定",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "LabelCheck",
                        "paramType": "string",
                        "description": "标签检查",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Kilometers",
                        "paramType": "dateTime",
                        "description": "公里数",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Amount",
                        "paramType": "decimal",
                        "description": "金额",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Operator_Id",
                        "paramType": "string",
                        "description": "运营方ID",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Goods_No",
                        "paramType": "string",
                        "description": "商品编号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "TRANSPORT_TIME",
                        "paramType": "dateTime",
                        "description": "启运时间",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Ldc_Id",
                        "paramType": "string",
                        "description": "物流中心ID",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Storehouse_No",
                        "paramType": "string",
                        "description": "库房编号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Sterilization_Lotno",
                        "paramType": "string",
                        "description": "灭菌批号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Goods_Type",
                        "paramType": "string",
                        "description": "产品大类",
                        "children": null
                    }
                ]
            }
        ],
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "cgrkhc",
            "method": "post",
            "apiUrl": "/api-general/v1/rksc",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"func_type\":\"select\",\"json_data\":{\"Ldc_Id\":\"690251255778594\",\"Business_Type\":\"1\",\"Businessbill_No\":\"JHF01201998\",\"Operator_Id\":\"174660684877367\",\"Con_Id\":\"163684786449824\",\"Invoice_Staff\":\"\"}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/api-general/v1/xtsc",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "销售退回回传",
        "serviceCode": "xsthhcjk",
        "shareDesc": "销售退回回传",
        "apiDocTypeId": 32,
        "description": "从九州通获取销售退回订单的入库记录数据",
        "apiDesc": "从九州通获取销售退回订单的入库记录数据",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "func_type",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "select",
                "example": "select",
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "xtsc",
                "paramLocation": "body",
                "isNeed": "否",
                "description": null,
                "example": null,
                "children": [
                    {
                        "paramName": "Business_Type",
                        "paramType": "string(2)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "业务类型",
                        "example": "4",
                        "children": null
                    },
                    {
                        "paramName": "Businessbill_No",
                        "paramType": "string(100)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "业务单据编号",
                        "example": "XTK00783700",
                        "children": null
                    },
                    {
                        "paramName": "Operator_Id",
                        "paramType": "string(32)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "运营方ID",
                        "example": "174660684877367",
                        "children": null
                    },
                    {
                        "paramName": "Con_Id",
                        "paramType": "string(32)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "委托方ID",
                        "example": "163684786449824",
                        "children": null
                    },
                    {
                        "paramName": "Invoice_Staff",
                        "paramType": "string(32)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "",
                        "example": null,
                        "children": null
                    }
                ]
            }
        ],
        "responseParamList": [
            {
                "statusCode": "200",
                "paramName": null,
                "paramType": "xtscResponse",
                "description": "销售退回回传成功",
                "children": [
                    {
                        "statusCode": null,
                        "paramName": "SpotCheck_Qty",
                        "paramType": "decimal(15,5)",
                        "description": "抽检数量",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "SpecificationsCheck",
                        "paramType": "string(30)",
                        "description": "说明书检查",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Arrival_Mode",
                        "paramType": "string(2)",
                        "description": "到货方式\n1：客户送货\n2：托运公司送货\n3：公司自提\n4：邮政到货\n5：子公司直接送货\n6：到托运公司提货\n7：暂存\n8：销毁\n9：直调\nA1：待货入库\nA2：提货入库",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Storage_Type",
                        "paramType": "string(2)",
                        "description": "入库类型\n1：正常入库\n2：直通入库\n3：购退入库\n4：销退入库\n5：赠品入库",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Rp_Reasons",
                        "paramType": "string(3)",
                        "description": "退货原因",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Auditor_Time",
                        "paramType": "dateTime",
                        "description": "审核时间",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Auditor",
                        "paramType": "string(32)",
                        "description": "审核人",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "UnQualified_Qty",
                        "paramType": "decimal(14,5)",
                        "description": "验收不合格数量",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Remarks",
                        "paramType": "string(200)",
                        "description": "备注",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Aging",
                        "paramType": "string(15)",
                        "description": "时效",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "InstoreBill_No_LMIS",
                        "paramType": "dateTime",
                        "description": "LMIS作业单号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Con_Id",
                        "paramType": "string(32)",
                        "description": "委托方ID",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Storage_Quantity",
                        "paramType": "decimal(14,5)",
                        "description": "入库数量",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Acceptance_Check_Date",
                        "paramType": "string(2)",
                        "description": "",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Transport_Mode",
                        "paramType": "string(100)",
                        "description": "运输方式(工具)\n0：封闭式汽车\n1：冷藏车\n2：冷藏箱\n3：空运保温箱\n4：保温箱\n5：快递保温箱\n6：铁运保温箱\n7：航运集装箱\n8：冷藏车+保温箱\n9：其他\n10：铁路零担\n11：高铁零担",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "OutPackingCheck",
                        "paramType": "string(30)",
                        "description": "外包装检查",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Tdeladdress_Id",
                        "paramType": "string(32)",
                        "description": "提货地址ID",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Bill_Hdr_Id",
                        "paramType": "string(32)",
                        "description": "单据ID",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Bill_Dtl_Id_Old",
                        "paramType": "string(32)",
                        "description": "行号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Takegds_Time",
                        "paramType": "dateTime",
                        "description": "接货时间",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Price",
                        "paramType": "decimal(14,5)",
                        "description": "单价",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Quality_Inspector",
                        "paramType": "decimal(100)",
                        "description": "质检员",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Bill_Dtl_Id",
                        "paramType": "string(10)",
                        "description": "行号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Outstorebill_No",
                        "paramType": "string(50)",
                        "description": "出库单号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Goods_Lotno",
                        "paramType": "string(15)",
                        "description": "商品批号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Tprt_Record",
                        "paramType": "string(100)",
                        "description": "到货温度(验收温度)",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Biz_Bill_No",
                        "paramType": "string(30)",
                        "description": "业务单据编号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Production_Date",
                        "paramType": "date",
                        "description": "生产日期",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "VisForeignMatter",
                        "paramType": "string(30)",
                        "description": "可见异物检查",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Is_Stock",
                        "paramType": "string(2)",
                        "description": "是否记账",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Bill_Dtl_Id_jzyc",
                        "paramType": "string",
                        "description": "九州云仓ID",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "recorderNo",
                        "paramType": "string(60)",
                        "description": "记录仪型号或编号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Tprt_Mode",
                        "paramType": "string(100)",
                        "description": "温控方式",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Invoice_Time",
                        "paramType": "dateTime",
                        "description": "开票时间",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Departure_Address",
                        "paramType": "string(200)",
                        "description": "启运地点",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Goods_Value",
                        "paramType": "decimal(14,2)",
                        "description": "商品价值",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Vehicle_No",
                        "paramType": "string(50)",
                        "description": "车牌号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Receiving_Clerk",
                        "paramType": "string(100)",
                        "description": "收货员",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Valid_Until",
                        "paramType": "date",
                        "description": "有效期",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Qualified_Qty",
                        "paramType": "decimal(22,5)",
                        "description": "验收合格数量",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Transport_Ssa",
                        "paramType": "string(100)",
                        "description": "运输单位",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Treatment_Measures",
                        "paramType": "string(200)",
                        "description": "处理措施",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Ssa_No",
                        "paramType": "string(20)",
                        "description": "客户编号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Storageaddress_Id",
                        "paramType": "dateTime",
                        "description": "入库地址ID",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Invoice_Staff",
                        "paramType": "string(40)",
                        "description": "开票员",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Acceptance_Check_Rlt",
                        "paramType": "string(2)",
                        "description": "验收评定\n1：合格\n2：不合格\n3：入库待验\n4：拒收\n5：待验确定\n6：在库待验\n7：停售\n8：拒收\n9：待入库",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "LabelCheck",
                        "paramType": "string(30)",
                        "description": "标签检查",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Kilometers",
                        "paramType": "decimal(14,2)",
                        "description": "公里数",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Amount",
                        "paramType": "decimal(20,5)",
                        "description": "金额",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Operator_Id",
                        "paramType": "string(32)",
                        "description": "运营方ID",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Goods_No",
                        "paramType": "string(20)",
                        "description": "商品编号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "TRANSPORT_TIME",
                        "paramType": "dateTime",
                        "description": "启运时间",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Ldc_Id",
                        "paramType": "string(32)",
                        "description": "物流中心ID",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Storehouse_No",
                        "paramType": "string(4)",
                        "description": "库房编号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Sterilization_Lotno",
                        "paramType": "string(32)",
                        "description": "灭菌批号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Goods_Type",
                        "paramType": "string(4)",
                        "description": "产品大类",
                        "children": null
                    }
                ]
            }
        ],
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "xsthhcjk",
            "method": "post",
            "apiUrl": "/api-general/v1/xtsc",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"func_type\":\"select\",\"json_data\":{\"Business_Type\":\"4\",\"Businessbill_No\":\"XTK00783700\",\"Operator_Id\":\"174660684877367\",\"Con_Id\":\"163684786449824\",\"Invoice_Staff\":\"\"}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/api-general/v1/zkyhjl",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "在库养护记录",
        "serviceCode": "zkyhjl",
        "shareDesc": "在库养护记录",
        "apiDocTypeId": 32,
        "description": "仓库完成养护后的在库养护记录查询接口",
        "apiDesc": "仓库完成养护后的在库养护记录查询接口",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "func_type",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "select",
                "example": "select",
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "zkyhjl",
                "paramLocation": "body",
                "isNeed": "否",
                "description": null,
                "example": null,
                "children": [
                    {
                        "paramName": "Ldc_Id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "物流中心ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Upkeep_Type",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "养护类型",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Operator_Id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "运营方ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Con_Id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "委托方ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Start_Date",
                        "paramType": "date",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "开始日期",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "End_Date",
                        "paramType": "date",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "结束日期",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Goods_No",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "商品编号",
                        "example": null,
                        "children": null
                    }
                ]
            }
        ],
        "responseParamList": [
            {
                "statusCode": "200",
                "paramName": null,
                "paramType": "zkyhjlResponse",
                "description": "在库养护记录成功",
                "children": [
                    {
                        "statusCode": null,
                        "paramName": "Maintenance_Cate",
                        "paramType": "date",
                        "description": "养护日期",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "processingOpinion",
                        "paramType": "string",
                        "description": "处理建议（作废）",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Package_Unit",
                        "paramType": "string",
                        "description": "包装单位",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Upkeep_Type",
                        "paramType": "string",
                        "description": "养护类型",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Display_Location",
                        "paramType": "string",
                        "description": "显示货位",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Production_Date",
                        "paramType": "date",
                        "description": "生产日期",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Universal_Name",
                        "paramType": "string",
                        "description": "通用名",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Package_Qty",
                        "paramType": "integer",
                        "description": "包装数量",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Actual_Qty",
                        "paramType": "decimal",
                        "description": "数量",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Businessbill_No",
                        "paramType": "string",
                        "description": "业务单据编号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Prescription_Cate",
                        "paramType": "string",
                        "description": "处方分类",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Quality_State",
                        "paramType": "string",
                        "description": "质量状况",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Drug_Spec",
                        "paramType": "string",
                        "description": "药品规格",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Goods_No",
                        "paramType": "string",
                        "description": "商品编号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Goods_Name",
                        "paramType": "string",
                        "description": "商品名称",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Lot_No",
                        "paramType": "string",
                        "description": "批号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Handling_Suggestion",
                        "paramType": "string",
                        "description": "处理意见",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Valid_Until",
                        "paramType": "date",
                        "description": "有效期",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Manufacturer",
                        "paramType": "string",
                        "description": "生产厂家",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Bill_Dtl_Id_Jzyc",
                        "paramType": "string",
                        "description": "九州云仓ID",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Con_Name",
                        "paramType": "string",
                        "description": "委托方名称",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Storage_Condition",
                        "paramType": "string",
                        "description": "存储条件",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Approval_No",
                        "paramType": "string",
                        "description": "批准文号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Maintenance_Staff",
                        "paramType": "string",
                        "description": "养护员",
                        "children": null
                    }
                ]
            }
        ],
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "zkyhjl",
            "method": "post",
            "apiUrl": "/api-general/v1/zkyhjl",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"func_type\":\"select\",\"json_data\":{\"Ldc_Id\":\"\",\"Upkeep_Type\":\"\",\"Operator_Id\":\"\",\"Con_Id\":\"\",\"Start_Date\":\"\",\"End_Date\":\"\",\"Goods_No\":\"\"}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/api-general/v1/ishOrderPlanCancel",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "入库计划取消",
        "serviceCode": "rkjhqxjk",
        "shareDesc": "入库计划取消",
        "apiDocTypeId": 32,
        "description": "已推送到九州通的入库计划、采购订单、销退订单需要取消时，通过此接口进行取消。",
        "apiDesc": "已推送到九州通的入库计划、采购订单、销退订单需要取消时，通过此接口进行取消。",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "func_type",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "saveData",
                "example": "saveData",
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "ishOrderPlanCancel",
                "paramLocation": "body",
                "isNeed": "否",
                "description": null,
                "example": null,
                "children": [
                    {
                        "paramName": "biz_bill_no",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "业务单据编号  主键",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "operator_id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "运营方ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "con_id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "委托方ID",
                        "example": null,
                        "children": null
                    }
                ]
            }
        ],
        "responseParamList": null,
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "rkjhqxjk",
            "method": "post",
            "apiUrl": "/api-general/v1/ishOrderPlanCancel",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"func_type\":\"saveData\",\"json_data\":{\"biz_bill_no\":\"\",\"operator_id\":\"\",\"con_id\":\"\"}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/api-general/v1/transOrderPlanCancel",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "运输计划取消",
        "serviceCode": "ysjhqx",
        "shareDesc": "运输计划取消",
        "apiDocTypeId": 32,
        "description": "取消推送个九州通配送的纯运输订单",
        "apiDesc": "取消推送个九州通配送的纯运输订单",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "func_type",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "saveData",
                "example": "saveData",
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "transOrderPlanCancel",
                "paramLocation": "body",
                "isNeed": "否",
                "description": null,
                "example": null,
                "children": [
                    {
                        "paramName": "biz_bill_no",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "业务单据编号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "operator_id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "运营方ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "con_id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "委托方ID",
                        "example": null,
                        "children": null
                    }
                ]
            }
        ],
        "responseParamList": null,
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "ysjhqx",
            "method": "post",
            "apiUrl": "/api-general/v1/transOrderPlanCancel",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"func_type\":\"saveData\",\"json_data\":{\"biz_bill_no\":\"\",\"operator_id\":\"\",\"con_id\":\"\"}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/api-general/v1/sp",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "商品资料推送",
        "serviceCode": "sp",
        "shareDesc": "商品资料推送",
        "apiDocTypeId": 32,
        "description": "推送商品资料到九州通。",
        "apiDesc": "推送商品资料到九州通。",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "json_data",
                "paramType": "spList",
                "paramLocation": "body",
                "isNeed": "否",
                "description": null,
                "example": null,
                "children": [
                    {
                        "paramName": "func_type",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": null,
                        "example": "saveData",
                        "children": null
                    },
                    {
                        "paramName": "json_data",
                        "paramType": "array[sp]",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": null,
                        "example": null,
                        "children": [
                            {
                                "paramName": "Is_Hydroxystenozole",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "是否蛋肽药品\nY:是\nN:否",
                                "example": "N",
                                "children": null
                            },
                            {
                                "paramName": "Retail_Price",
                                "paramType": "decimal",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "零售价",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Goods_Id",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "商品id\n内部必填",
                                "example": "DSFLM016",
                                "children": null
                            },
                            {
                                "paramName": "Universal_Name",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "通用名",
                                "example": "龙牡壮骨颗粒",
                                "children": null
                            },
                            {
                                "paramName": "tempDecimal5",
                                "paramType": "decimal",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "临时数值型字段5",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "tempDecimal6",
                                "paramType": "decimal",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "临时数值型字段6",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "tempDecimal3",
                                "paramType": "decimal",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "临时数值型字段3",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "tempDecimal4",
                                "paramType": "decimal",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "临时数值型字段4",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "tempDecimal1",
                                "paramType": "decimal",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "临时数值型字段1",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Creator",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "申请人",
                                "example": "305828464622808",
                                "children": null
                            },
                            {
                                "paramName": "Is_Valuabledrug",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "是否贵重药品\nY:是\nN:否",
                                "example": "N",
                                "children": null
                            },
                            {
                                "paramName": "Goods_Weight",
                                "paramType": "decimal",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "商品重量（KG）",
                                "example": 6.0,
                                "children": null
                            },
                            {
                                "paramName": "Con_GMP_License_Valid_Until",
                                "paramType": "date",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "委托GMP效期",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Is_Active",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "是否启用\nY:是\nN:否",
                                "example": "Y",
                                "children": null
                            },
                            {
                                "paramName": "Manufacturer",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "生产厂家",
                                "example": "武汉健民集团股份有限公司",
                                "children": null
                            },
                            {
                                "paramName": "Is_Primary_Control",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "是否重点控制（养护）\nY:是\nN:否",
                                "example": "N",
                                "children": null
                            },
                            {
                                "paramName": "Con_Id",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "委托方ID",
                                "example": "16368478644982411",
                                "children": null
                            },
                            {
                                "paramName": "Updated_Time",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "修改时间",
                                "example": "2023-10-24 22:28:22",
                                "children": null
                            },
                            {
                                "paramName": "Min_InvoiceUnit",
                                "paramType": "integer",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "最小开票单位",
                                "example": 1,
                                "children": null
                            },
                            {
                                "paramName": "Storage_Attention",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "存储注意事项",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Approval_No",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "批准文号/注册证号",
                                "example": "2121231231",
                                "children": null
                            },
                            {
                                "paramName": "Goods_Length",
                                "paramType": "decimal",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "长（CM）",
                                "example": 10.0,
                                "children": null
                            },
                            {
                                "paramName": "Created_Time",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "申请时间",
                                "example": "2023-10-24 22:28:22",
                                "children": null
                            },
                            {
                                "paramName": "Wholesale_Price",
                                "paramType": "decimal",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "批发价",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Drug_Spec",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "药品规格",
                                "example": "5g*40*50盒",
                                "children": null
                            },
                            {
                                "paramName": "marketingAuthorisationHolder",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "上市许可持有人",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "GMP_License",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "GMP证件/GSP证件",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Goods_Name",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "中文名",
                                "example": "龙牡壮骨颗粒3",
                                "children": null
                            },
                            {
                                "paramName": "Mnemonic_Code",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "助记码",
                                "example": "LMZGKL",
                                "children": null
                            },
                            {
                                "paramName": "Is_2c_Psychotropicdrug",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "是否二类精神药品\nY:是\nN:否",
                                "example": "N",
                                "children": null
                            },
                            {
                                "paramName": "Is_Specialcontroldrug",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "是否特管药品\nY:是\nN:否",
                                "example": "N",
                                "children": null
                            },
                            {
                                "paramName": "Business_Model",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "商品业务模式",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Goods_No_Company",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "集团商品编号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "foodManufacturerLicense",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "食品生产企业许可证",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Dosage_Form",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "剂型\n传中文，例如：滴眼剂",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "Mta_Manufacturer_License_Valid_Until",
                                "paramType": "date",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "医疗器械产品注册证或备案凭证编号有效期至",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Goods_Width",
                                "paramType": "decimal",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "宽（CM）",
                                "example": 20.0,
                                "children": null
                            },
                            {
                                "paramName": "Manufacturer_License_Valid_Until",
                                "paramType": "date",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "生产企业许可证有效期至",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "GMP_License_Valid_Until",
                                "paramType": "date",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "GMP效期/GSP效期",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Is_Chilleddrug",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "是否冷藏药品\nY:是\nN:否",
                                "example": "N",
                                "children": null
                            },
                            {
                                "paramName": "Approval_No_Valid_Until",
                                "paramType": "date",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "批准文号/注册证号有效期至",
                                "example": "2025-10-24",
                                "children": null
                            },
                            {
                                "paramName": "foodManufacturerLicenseValidUntil",
                                "paramType": "date",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "食品生产企业许可证有效期",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Cost_Price",
                                "paramType": "decimal",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "成本价",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Package_Unit",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "包装单位   盒，支，个等计量单位",
                                "example": "盒",
                                "children": null
                            },
                            {
                                "paramName": "Refrigeration_Type",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "温层\n00：常温(10-30℃)\n0：阴凉\n1：冷藏(2~8°C)\n2：冷冻(-20~-10°C)\n3：冷冻(-15~-5°C)\n4：冷藏(0~5°C)\n5：冷藏(5~25°C)\n6：冷冻(-20~-5°C)\n7：冷冻（-18~-30°C）\n8：冷冻（-15~-10°C）\n9：冷藏（-40~10°C）\n10：冷冻（-40~0°C）\n11：冷冻（-22~-18°C）\n12：冷冻（-25~-15°C）\n13：冷冻（-85~-15°C）\n14：冷藏(4~10°C)\n15:冷冻(-20~0°C)\n16:冷藏(2~15°C)\n17:冷冻(-80~-20°C)\n18:冷冻(-2~4°C)\n19:冷藏(0~4°C)",
                                "example": "00",
                                "children": null
                            },
                            {
                                "paramName": "Drug_Cate",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "药品大类\n传中文，例如：内用药",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "Goods_Height",
                                "paramType": "decimal",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "高（CM）",
                                "example": 30.0,
                                "children": null
                            },
                            {
                                "paramName": "tempVar3",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "临时字符型字段3",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "tempVar4",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "临时字符型字段4",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "tempVar5",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "临时字符型字段5",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Is_Importeddrug",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "是否进口药品\nY:是\nN:否",
                                "example": "N",
                                "children": null
                            },
                            {
                                "paramName": "tempVar6",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "临时字符型字段6",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "tempVar7",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "临时字符型字段7",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "tempVar8",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "临时字符型字段8",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "tempVar9",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "临时字符型字段9",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Download_Side",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "单据下传方\n0:业务系统下传\n1:第三方下传\n2:LMIS\n3:业务平台新建",
                                "example": "1",
                                "children": null
                            },
                            {
                                "paramName": "Tcm_Producing_Area",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "中药产地",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Producing_Area",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "产地",
                                "example": "武汉",
                                "children": null
                            },
                            {
                                "paramName": "Goods_Operation_Brevity",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "商品经营简码\n如果有经营范围要求的就是必填项",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Con_GMP_License",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "委托GMP",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Storage_Condition",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "存储条件\nC:常温\nD:冷冻\nL:冷藏\nY:阴凉\nH:恒温",
                                "example": "Y",
                                "children": null
                            },
                            {
                                "paramName": "S_Pkg_Barcode",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "小包装条码\n药品的69码",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "LIUS_NO",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "流水号  主键",
                                "example": "1",
                                "children": null
                            },
                            {
                                "paramName": "Package_Qty",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "包装数量  必须大于0",
                                "example": "1",
                                "children": null
                            },
                            {
                                "paramName": "Prescription_Cate",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "处方分类",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Is_Psychotropicdrug",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "是否精神药品\nY:是\nN:否",
                                "example": "N",
                                "children": null
                            },
                            {
                                "paramName": "Goods_No",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "商品编号",
                                "example": "DSFLM0015",
                                "children": null
                            },
                            {
                                "paramName": "tempVar1",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "临时字符型字段1",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Goods_Operation_Brevity_Erp",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "商品经营简码(ERP)\n如果有经营范围要求的就是必填项",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "tempVar2",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "临时字符型字段2",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Ldc_Id",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "物流中心id",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Split_Granularity",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "拆分粒度\n1:可拆零\n2:不拆中包装\n3:不拆大包装\n4:可以小数",
                                "example": "1",
                                "children": null
                            },
                            {
                                "paramName": "Drug_Qs",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "药品质量执行标准",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Manufacturer_License",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "生产企业许可证",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Emc_Type",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "监管类型\nY：监管品种\nN :非监管品种",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "M_Package_Qty",
                                "paramType": "decimal",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "中包装数量",
                                "example": 1.0,
                                "children": null
                            },
                            {
                                "paramName": "tempVar10",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "临时字符型字段10",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "tempVar11",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "临时字符型字段11",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "tempVar12",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "临时字符型字段12",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "tempVar13",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "临时字符型字段13",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "tempVar14",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "临时字符型字段14",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Mta_Manufacturer_License",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "医疗器械产品注册证或备案凭证编号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Goods_Type",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "商品类型\n1:西药\n2:中药\n3:计生\n4:器械\n5:原料药\n6:第三方\n7:赠品\n8:冷藏品\n9:阴凉品\n10:消费品",
                                "example": "1",
                                "children": null
                            }
                        ]
                    }
                ]
            }
        ],
        "responseParamList": null,
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "sp",
            "method": "post",
            "apiUrl": "/api-general/v1/sp",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"func_type\":\"saveData\",\"json_data\":[{\"Is_Hydroxystenozole\":\"N\",\"Retail_Price\":\"\",\"Goods_Id\":\"DSFLM016\",\"Universal_Name\":\"龙牡壮骨颗粒\",\"tempDecimal5\":\"\",\"tempDecimal6\":\"\",\"tempDecimal3\":\"\",\"tempDecimal4\":\"\",\"tempDecimal1\":\"\",\"Creator\":\"305828464622808\",\"Is_Valuabledrug\":\"N\",\"Goods_Weight\":6.0,\"Con_GMP_License_Valid_Until\":\"\",\"Is_Active\":\"Y\",\"Manufacturer\":\"武汉健民集团股份有限公司\",\"Is_Primary_Control\":\"N\",\"Con_Id\":\"16368478644982411\",\"Updated_Time\":\"2023-10-24 22:28:22\",\"Min_InvoiceUnit\":1,\"Storage_Attention\":\"\",\"Approval_No\":\"2121231231\",\"Goods_Length\":10.0,\"Created_Time\":\"2023-10-24 22:28:22\",\"Wholesale_Price\":\"\",\"Drug_Spec\":\"5g*40*50盒\",\"marketingAuthorisationHolder\":\"\",\"GMP_License\":\"\",\"Goods_Name\":\"龙牡壮骨颗粒3\",\"Mnemonic_Code\":\"LMZGKL\",\"Is_2c_Psychotropicdrug\":\"N\",\"Is_Specialcontroldrug\":\"N\",\"Business_Model\":\"\",\"Goods_No_Company\":\"\",\"foodManufacturerLicense\":\"\",\"Dosage_Form\":\"\",\"Mta_Manufacturer_License_Valid_Until\":\"\",\"Goods_Width\":20.0,\"Manufacturer_License_Valid_Until\":\"\",\"GMP_License_Valid_Until\":\"\",\"Is_Chilleddrug\":\"N\",\"Approval_No_Valid_Until\":\"2025-10-24\",\"foodManufacturerLicenseValidUntil\":\"\",\"Cost_Price\":\"\",\"Package_Unit\":\"盒\",\"Refrigeration_Type\":\"00\",\"Drug_Cate\":\"\",\"Goods_Height\":30.0,\"tempVar3\":\"\",\"tempVar4\":\"\",\"tempVar5\":\"\",\"Is_Importeddrug\":\"N\",\"tempVar6\":\"\",\"tempVar7\":\"\",\"tempVar8\":\"\",\"tempVar9\":\"\",\"Download_Side\":\"1\",\"Tcm_Producing_Area\":\"\",\"Producing_Area\":\"武汉\",\"Goods_Operation_Brevity\":\"\",\"Con_GMP_License\":\"\",\"Storage_Condition\":\"Y\",\"S_Pkg_Barcode\":\"\",\"LIUS_NO\":\"1\",\"Package_Qty\":\"1\",\"Prescription_Cate\":\"\",\"Is_Psychotropicdrug\":\"N\",\"Goods_No\":\"DSFLM0015\",\"tempVar1\":\"\",\"Goods_Operation_Brevity_Erp\":\"\",\"tempVar2\":\"\",\"Ldc_Id\":\"\",\"Split_Granularity\":\"1\",\"Drug_Qs\":\"\",\"Manufacturer_License\":\"\",\"Emc_Type\":\"\",\"M_Package_Qty\":1.0,\"tempVar10\":\"\",\"tempVar11\":\"\",\"tempVar12\":\"\",\"tempVar13\":\"\",\"tempVar14\":\"\",\"Mta_Manufacturer_License\":\"\",\"Goods_Type\":\"1\"}]}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/api-general/v1/transOrderPlan",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "运输计划推送",
        "serviceCode": "ysjhts",
        "shareDesc": "运输计划推送",
        "apiDocTypeId": 32,
        "description": "推送纯运输订单给九州通配送",
        "apiDesc": "推送纯运输订单给九州通配送",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "func_type",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "saveData",
                "example": "saveData",
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "transOrderPlan",
                "paramLocation": "body",
                "isNeed": "否",
                "description": null,
                "example": null,
                "children": [
                    {
                        "paramName": "ssa_no",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "客户编号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "ssa_name",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "客户名称（未单独对接客户资料和地址资料接口时，需要传）",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "biz_bill_no",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "业务单据编号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "tdg_mode",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "提货方式\nth:上门提货\nsh:送货上门",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "contact_phone",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "收件联系电话（未单独对接客户资料和地址资料接口时，需要传）",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "payer_mode",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "付款方\n字典值，值有：01委托方付、02委托方客户付",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "operator_id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "运营方ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "con_id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "委托方ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "invoice_time",
                        "paramType": "dateTime",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "制单时间",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "planned_pcs",
                        "paramType": "decimal",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "计划件数\n按件数计时，必须传计划件数",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "tdel_contact_phone",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "提货联系电话",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "is_sceneprint",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "是否现场打印\nN：否\nY：是",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "is_ receipt",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "是否回单\nN：否\nY：是",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "tdel_address",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "提货地址",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "refrigeration_type",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "温层",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "goods_width",
                        "paramType": "decimal",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "大包装宽(CM)",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "goods_weight",
                        "paramType": "decimal",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "商品重量kg\n单件商品的重量，运输计划明细级别",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "goods_name",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "商品名称\n传运输的商品名称",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "contact_name",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "收件人（未单独对接客户资料和地址资料接口时，需要传）",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "amount",
                        "paramType": "decimal",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "金额\n运输计划明细级别，单商品明细的金额，金额=单价*计划件数",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "address",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "收件地址\n需包含省份、城市、区县的标准三级地址（未单独对接客户资料和地址资料接口时，需要传）",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "bill_dtl_id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "行号\n单据有多行，传具体的行号，主键，不允许重复",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "temper_request",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "温层要求\n1：冷藏(2@8)\n2：冷冻(-20@-10)\n3：冷冻(-15@-5)\n4：冷藏(0@5)\n5：冷藏(5@25)\n6：冷冻(-20@-5)\n7：冷冻（-18@-30）\n8：冷冻（-15@-10）\n9：冷藏（-40@10）\n10：冷冻（-40@0）",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "ys_accessorial_service_item_code",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "运输增值服务编码\n字典值，值有：SMTH上门提货、SHSM送货上门、HDQS回单签收、HWBX货物保险",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "takestringge_amount",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "托收金额",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "tdel_contact_name",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "提货联系人",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Delivery_Address_Id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "地址编号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "takegds_time",
                        "paramType": "dateTime",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "提货时间\n上门提货传提货时间，送货上门传接货时间",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "goods_length",
                        "paramType": "decimal",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "大包装长(CM)",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "goods_height",
                        "paramType": "decimal",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "大包装高(CM)",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "planned_volume",
                        "paramType": "decimal",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "计划体积\n按体积计时，必须传计划体积",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "vehicle_size",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "车辆大小\n4.2m：4.2米\n5.2m：5.2米\n6.8m：6.8米\n7.2m：7.2米\n9.6m：9.6米\n15m：15米\n13.6m：13.6米",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "invoice_staff",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "制单员",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "vehicle_request",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "车辆要求\ncwc：常温车\nlcc：冷藏车",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "goods_value",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "商品价值\n需上门提货时，填写商品价值后根据商品价值保价",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "aging",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "时效\n24\n48\n72\n96\n120\n单位为小时",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "planned_weight",
                        "paramType": "decimal",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "计划重量\n按重量计时，必须传计划重量",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "goods_type",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "产品大类\n8:冷藏品\n9:阴凉品",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "is_takestringge",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "是否运费托收\nN：否\nY：是",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "remarks",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "备注",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "delivery_mode",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "送货方式\njzt:九州通配送\nkh:自行配送",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "transportplan_type",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "运输计划类型\nptys:普通运输计划\nbcys:包车运输计划",
                        "example": null,
                        "children": null
                    }
                ]
            }
        ],
        "responseParamList": null,
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "ysjhts",
            "method": "post",
            "apiUrl": "/api-general/v1/transOrderPlan",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"func_type\":\"saveData\",\"json_data\":{\"ssa_no\":\"\",\"ssa_name\":\"\",\"biz_bill_no\":\"\",\"tdg_mode\":\"\",\"contact_phone\":\"\",\"payer_mode\":\"\",\"operator_id\":\"\",\"con_id\":\"\",\"invoice_time\":\"\",\"planned_pcs\":\"\",\"tdel_contact_phone\":\"\",\"is_sceneprint\":\"\",\"is_ receipt\":\"\",\"tdel_address\":\"\",\"refrigeration_type\":\"\",\"goods_width\":\"\",\"goods_weight\":\"\",\"goods_name\":\"\",\"contact_name\":\"\",\"amount\":\"\",\"address\":\"\",\"bill_dtl_id\":\"\",\"temper_request\":\"\",\"ys_accessorial_service_item_code\":\"\",\"takestringge_amount\":\"\",\"tdel_contact_name\":\"\",\"Delivery_Address_Id\":\"\",\"takegds_time\":\"\",\"goods_length\":\"\",\"goods_height\":\"\",\"planned_volume\":\"\",\"vehicle_size\":\"\",\"invoice_staff\":\"\",\"vehicle_request\":\"\",\"goods_value\":\"\",\"aging\":\"\",\"planned_weight\":\"\",\"goods_type\":\"\",\"is_takestringge\":\"\",\"remarks\":\"\",\"delivery_mode\":\"\",\"transportplan_type\":\"\"}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/api-general/v1/highValueOrder",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "高值耗材单据下传接口",
        "serviceCode": "highValueOrder",
        "shareDesc": "高值耗材单据下传接口",
        "apiDocTypeId": 32,
        "description": "主要用于高值耗材类的入出库单据下传",
        "apiDesc": "主要用于高值耗材类的入出库单据下传",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "json_data",
                "paramType": "gzhcrck",
                "paramLocation": "body",
                "isNeed": "否",
                "description": null,
                "example": null,
                "children": [
                    {
                        "paramName": "func_type",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "",
                        "example": "saveData",
                        "children": null
                    },
                    {
                        "paramName": "json_data",
                        "paramType": "highValueOrder",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": null,
                        "example": null,
                        "children": [
                            {
                                "paramName": "sorg_id",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "库存组织id ，商品明细级别,九州通内部erp必传",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "goods_lotno",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "批号",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "borg_name_ck",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "业务组织名称(出库),九州通内部erp必传",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "operator_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "运营商id，外部委托方必传",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "outbound_mode",
                                "paramType": "string(10)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "出库类型，1、出库待配；2、出库配送;需要配送传2即可；",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "ssa_no_rk",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "入库单位编号，外部委托方必传",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "remarks_ck",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "出库备注",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "goods_code",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "商品内码，九州通内部erp必传",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "con_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "委托方id，外部委托方必传",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_no",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "商品编号，外部委托方必传",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "production_date",
                                "paramType": "date",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "生产日期",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "price_ck",
                                "paramType": "decimal(（22,5）)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "出库单价",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "invoice_time",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "开票时间",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "businessbill_no_rk",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "入库业务单号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "download_side",
                                "paramType": "string(2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "单据下传方，0, 内部ERP系统，1，外部三方客户系统",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "borg_id_ck",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "业务组织id(出库),九州通内部erp必传",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "amount_rk",
                                "paramType": "decimal(（22,5）)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "入库金额",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "usage_id_rk",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "用途id (入库),九州通内部erp必传",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "rp_reasons_gt",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "购退原因，购退必填",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "ldc_id",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "物流中心id，外部委托方必传",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "ssa_code_rk",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "入库单位内码，九州通内部erp必传",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "ssa_no_ck",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "出库单位编号，外部委托方必传",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "bill_type",
                                "paramType": "string(10)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "单据传输类型，rkck:先入后出\nxtgt:先入先出",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "usage_name_rk",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "用途名称(入库),九州通内部erp必传",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "businessbill_no_ck",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "出库业务单号，可为空，为空就默认入库单号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "usage_id_ck",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "用途id (出库),九州通内部erp必传",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "con_no",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "委托方编号，九州通内部erp必传可用，例如：FDG",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "sorg_name",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "库存组织名称，商品明细级别,九州通内部erp必传",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "amount_ck",
                                "paramType": "decimal(（22,5）)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "出库金额",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "borg_id_rk",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "业务组织id(入库),九州通内部erp必传",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "ssa_code_ck",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "出库单位内码，九州通内部erp必传",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "borg_name_rk",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "业务组织名称(入库),九州通内部erp必传",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "usage_name_ck",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "用途名称(出库),九州通内部erp必传",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "ldc_no",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "物流中心编码，九州通内部erp必传可用，例如：CKI00011464",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "valid_until",
                                "paramType": "date",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "有效期至",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "actual_qty",
                                "paramType": "decimal(（22,5）)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "数量",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "price_rk",
                                "paramType": "decimal(（22,5）)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "入库单价",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "acceptance_check_rlt",
                                "paramType": "string(2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "库存状态，1、合格；2、不合格；",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "remarks_rk",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "入库备注",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "bill_dtl_id_old",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "行号",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "invoice_staff",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "开票员（中文）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_type",
                                "paramType": "string(10)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "商品类型，1、西药；2、中药；3、计生；4、器械；6、第三方；",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "rp_reasons_xt",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "销退原因，销退必填",
                                "example": "",
                                "children": null
                            }
                        ]
                    }
                ]
            }
        ],
        "responseParamList": null,
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "highValueOrder",
            "method": "post",
            "apiUrl": "/api-general/v1/highValueOrder",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"func_type\":\"saveData\",\"json_data\":{\"sorg_id\":\"\",\"goods_lotno\":\"\",\"borg_name_ck\":\"\",\"operator_id\":\"\",\"outbound_mode\":\"\",\"ssa_no_rk\":\"\",\"remarks_ck\":\"\",\"goods_code\":\"\",\"con_id\":\"\",\"goods_no\":\"\",\"production_date\":\"\",\"price_ck\":\"\",\"invoice_time\":\"\",\"businessbill_no_rk\":\"\",\"download_side\":\"\",\"borg_id_ck\":\"\",\"amount_rk\":\"\",\"usage_id_rk\":\"\",\"rp_reasons_gt\":\"\",\"ldc_id\":\"\",\"ssa_code_rk\":\"\",\"ssa_no_ck\":\"\",\"bill_type\":\"\",\"usage_name_rk\":\"\",\"businessbill_no_ck\":\"\",\"usage_id_ck\":\"\",\"con_no\":\"\",\"sorg_name\":\"\",\"amount_ck\":\"\",\"borg_id_rk\":\"\",\"ssa_code_ck\":\"\",\"borg_name_rk\":\"\",\"usage_name_ck\":\"\",\"ldc_no\":\"\",\"valid_until\":\"\",\"actual_qty\":\"\",\"price_rk\":\"\",\"acceptance_check_rlt\":\"\",\"remarks_rk\":\"\",\"bill_dtl_id_old\":\"\",\"invoice_staff\":\"\",\"goods_type\":\"\",\"rp_reasons_xt\":\"\"}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/api-general/v1/xsthSharing",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "销退共享订单推送（暂内部）",
        "serviceCode": "xtgxddts",
        "shareDesc": "销退共享订单推送（暂内部）",
        "apiDocTypeId": 32,
        "description": "推送销退共享订单到九州通，实现库存共享的快速销退。",
        "apiDesc": "推送销退共享订单到九州通，实现库存共享的快速销退。",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "func_type",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "saveData",
                "example": "saveData",
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "xsthSharing",
                "paramLocation": "body",
                "isNeed": "否",
                "description": null,
                "example": null,
                "children": [
                    {
                        "paramName": "ssa_no",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "客户编号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "usage_id_gt",
                        "paramType": "string(30)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "购进退出用途id",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "arrival_mode",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "到货方式  A1:待货入库 A2:提货入库",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "goods_lotno",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "商品批号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "operator_id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "运营方ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "con_id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "委托方ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "goods_no",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "商品编号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "production_date",
                        "paramType": "date",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "生产日期  批号不为空时，生产日期不能为空",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "usage_name_xt",
                        "paramType": "string(200)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "销售退回用途名称",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "sorg_id_gt",
                        "paramType": "string(30)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "购进退出库存组织id",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "danjxc_side",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "单据下传方\n外部三方：1；\n九州通内部公司：0",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "invoice_time",
                        "paramType": "dateTime",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "开票时间",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "download_side",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "单据下传方  0:自营ERP，1:委托方系统",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "remarks_gt",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "购进退出备注   填写订单备注信息",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "rp_reasons_gt",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "购进退出退货原因  例：开票原因：开错批号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "borg_id_gt",
                        "paramType": "string(30)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "购进退出业务组织id",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "relevant_ssa_no",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "关联客户编号  共享退货客户编号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "ldc_id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "物流中心ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "businessbill_no",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "业务单据编号  主键",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "sorg_name_gt",
                        "paramType": "string(200)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "购进退出库存组织名称",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "price",
                        "paramType": "decimal",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "单价",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "usage_name_gt",
                        "paramType": "string(200)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "购进退出用途名称",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "sorg_id_xt",
                        "paramType": "string(30)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "销售退回库存组织id",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "business_type",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "入库类型  4：销售退回",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "amount",
                        "paramType": "decimal",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "金额",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "sorg_name_xt",
                        "paramType": "string(200)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "销售退回库存组织名称",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "borg_id_xt",
                        "paramType": "string(30)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "销售退回业务组织id",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "borg_name_xt",
                        "paramType": "string(200)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "销售退回业务组织名称",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "relevant_con_id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "关联业主编号  共享退货业主",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "businessbill_no_plan",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "销售退回申请单",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "outstorebill_no",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "出库单号  原出库单据的业务单号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "usage_id_xt",
                        "paramType": "string(30)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "销售退回用途id",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "relevant_bill_no",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "关联单号  共享购退单号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "takegds_time",
                        "paramType": "dateTime",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "接货时间",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "tdeladdress_id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "提货地址ID  不传默认取委托方地址",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "valid_until",
                        "paramType": "date",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "有效期  批号不为空时，有效期不能为空",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "actual_qty",
                        "paramType": "decimal",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "入库数量",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "acceptance_check_rlt",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "验收评定   1: 合格 2:不合格  3:入库待验  4:拒收   5:待验确定   6:在库待验",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "bill_dtl_id_old",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "行号   同业务单行号不允许重复",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "invoice_staff",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "开票员",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "goods_type",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "产品大类  8:冷藏品  9:阴凉品",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "relevant_ldc_id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "关联物流中心编号  共享业主仓库编号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "rp_reasons_xt",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "销售退回退货原因  例：开票原因：开错批号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "remarks",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "备注   填写订单备注信息",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "borg_name_gt",
                        "paramType": "string(200)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "购进退出业务组织名称",
                        "example": null,
                        "children": null
                    }
                ]
            }
        ],
        "responseParamList": null,
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "xtgxddts",
            "method": "post",
            "apiUrl": "/api-general/v1/xsthSharing",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"func_type\":\"saveData\",\"json_data\":{\"ssa_no\":\"\",\"usage_id_gt\":\"\",\"arrival_mode\":\"\",\"goods_lotno\":\"\",\"operator_id\":\"\",\"con_id\":\"\",\"goods_no\":\"\",\"production_date\":\"\",\"usage_name_xt\":\"\",\"sorg_id_gt\":\"\",\"danjxc_side\":\"\",\"invoice_time\":\"\",\"download_side\":\"\",\"remarks_gt\":\"\",\"rp_reasons_gt\":\"\",\"borg_id_gt\":\"\",\"relevant_ssa_no\":\"\",\"ldc_id\":\"\",\"businessbill_no\":\"\",\"sorg_name_gt\":\"\",\"price\":\"\",\"usage_name_gt\":\"\",\"sorg_id_xt\":\"\",\"business_type\":\"\",\"amount\":\"\",\"sorg_name_xt\":\"\",\"borg_id_xt\":\"\",\"borg_name_xt\":\"\",\"relevant_con_id\":\"\",\"businessbill_no_plan\":\"\",\"outstorebill_no\":\"\",\"usage_id_xt\":\"\",\"relevant_bill_no\":\"\",\"takegds_time\":\"\",\"tdeladdress_id\":\"\",\"valid_until\":\"\",\"actual_qty\":\"\",\"acceptance_check_rlt\":\"\",\"bill_dtl_id_old\":\"\",\"invoice_staff\":\"\",\"goods_type\":\"\",\"relevant_ldc_id\":\"\",\"rp_reasons_xt\":\"\",\"remarks\":\"\",\"borg_name_gt\":\"\"}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/api-general/v1/oms_yk",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "仓间调拨计划推送",
        "serviceCode": "oms_yk",
        "shareDesc": "仓间调拨计划推送",
        "apiDocTypeId": 32,
        "description": "推送仓间调拨计划订单，用于各个仓库间商品流转到九州通",
        "apiDesc": "推送仓间调拨计划订单，用于各个仓库间商品流转到九州通",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "func_type",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "saveData",
                "example": "saveData",
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "omsYk",
                "paramLocation": "body",
                "isNeed": "否",
                "description": null,
                "example": null,
                "children": [
                    {
                        "paramName": "Production_Date",
                        "paramType": "date",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "生产日期\n批号不为空时，生产日期不能为空",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Biz_Bill_No",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "业务单据编号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Outnbound_Quantity",
                        "paramType": "decimal",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "出库数量",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "movetck_id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "调入仓编号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "cc_yc_yc_accessorial_service_item_name_code ",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "仓储移仓移出增值服务名称编码\n字典值，值有：XCFW卸车服务，DBFW打包服务",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Invoice_Time",
                        "paramType": "dateTime",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "制单时间",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Goods_Value",
                        "paramType": "decimal",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "商品价值\n需出库配送时，填写商品价值后根据商品价值保价;不保价可不填写",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Valid_Until",
                        "paramType": "date",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "有效期\n批号不为空时，有效期不能为空",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Remarks",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "备注",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Aging",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "时效\n24\n48\n72\n96\n120",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "fee_con_id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "计费委托方id",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Is_Receipt",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "是否回单\nN：否\nY：是",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Is_Sceneprint",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "是否现场打印\nN：否\nY：是",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Con_Id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "委托方ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Invoice_Staff",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "制单员",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Kilometers",
                        "paramType": "decimal",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "公里数",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "ys_accessorial_service_item_code",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "运输增值服务编码\n字典值，值有：SMTH上门提货、SHSM送货上门、HDQS回单签收、HWBX货物保险",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Amount",
                        "paramType": "decimal",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "金额",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Operator_Id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "运营方ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Goods_No",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "商品编号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "cc_yc_yr_accessorial_service_item_name_code ",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "仓储移仓移入增值服务名称编码\n字典值，值有：XCFW卸车服务",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "insurance_amount",
                        "paramType": "decimal",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "投保金额\n默认为0",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Price",
                        "paramType": "decimal",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "单价",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Bill_Dtl_Id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "行号\n单据有多行，传具体的行号，主键，不允许重复",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Outbound_Mode",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "出库方式\n1：出库待配\n2：出库配送",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "movefck_id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "调出仓编号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Goods_Lotno",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "商品批号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Delivery_Time",
                        "paramType": "dateTime",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "送货日期",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "outbound_type",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "出库方式\t\n字典值，值有：1出库自提、2出库配送\n默认为1",
                        "example": null,
                        "children": null
                    }
                ]
            }
        ],
        "responseParamList": null,
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "oms_yk",
            "method": "post",
            "apiUrl": "/api-general/v1/oms_yk",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"func_type\":\"saveData\",\"json_data\":{\"Production_Date\":\"\",\"Biz_Bill_No\":\"\",\"Outnbound_Quantity\":\"\",\"movetck_id\":\"\",\"cc_yc_yc_accessorial_service_item_name_code \":\"\",\"Invoice_Time\":\"\",\"Goods_Value\":\"\",\"Valid_Until\":\"\",\"Remarks\":\"\",\"Aging\":\"\",\"fee_con_id\":\"\",\"Is_Receipt\":\"\",\"Is_Sceneprint\":\"\",\"Con_Id\":\"\",\"Invoice_Staff\":\"\",\"Kilometers\":\"\",\"ys_accessorial_service_item_code\":\"\",\"Amount\":\"\",\"Operator_Id\":\"\",\"Goods_No\":\"\",\"cc_yc_yr_accessorial_service_item_name_code \":\"\",\"insurance_amount\":\"\",\"Price\":\"\",\"Bill_Dtl_Id\":\"\",\"Outbound_Mode\":\"\",\"movefck_id\":\"\",\"Goods_Lotno\":\"\",\"Delivery_Time\":\"\",\"outbound_type\":\"\"}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/api-general/v1/gtsc",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "购进退出回传",
        "serviceCode": "gjtshc",
        "shareDesc": "购进退出回传",
        "apiDocTypeId": 32,
        "description": "从九州通获取购进退出订单的出库记录数据",
        "apiDesc": "从九州通获取购进退出订单的出库记录数据",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "func_type",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "select",
                "example": "select",
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "gtsc",
                "paramLocation": "body",
                "isNeed": "否",
                "description": null,
                "example": null,
                "children": [
                    {
                        "paramName": "Businessbill_No",
                        "paramType": "string(100)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "业务单据编号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Operator_Id",
                        "paramType": "string(32)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "运营方ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Con_Id",
                        "paramType": "string(32)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "委托方ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Sale_Type",
                        "paramType": "string(2)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "销售类型",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Invoice_Staff",
                        "paramType": "string(32)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "开票员",
                        "example": null,
                        "children": null
                    }
                ]
            }
        ],
        "responseParamList": [
            {
                "statusCode": "200",
                "paramName": null,
                "paramType": "gtscResponse",
                "description": "购进退出回传成功",
                "children": [
                    {
                        "statusCode": null,
                        "paramName": "Biz_Bill_No",
                        "paramType": "string(30)",
                        "description": "业务单据编号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Production_Date",
                        "paramType": "date",
                        "description": "生产日期",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Rp_Reasons",
                        "paramType": "string(3)",
                        "description": "退货原因",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Outnbound_Quantity",
                        "paramType": "decimal(14,5)",
                        "description": "出库数量",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Instorebill_No",
                        "paramType": "string(30)",
                        "description": "购进入库单号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Rp_Cate",
                        "paramType": "string(2)",
                        "description": "退货类别\n1：合格\n2：不合格\n3：不限定\n4：停售",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Businessman",
                        "paramType": "string(40)",
                        "description": "业务员",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Invoice_Time",
                        "paramType": "dateTime",
                        "description": "开票时间",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Goods_Value",
                        "paramType": "decimal(14,2)",
                        "description": "商品价值",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Original_Bill_No",
                        "paramType": "string(40)",
                        "description": "合同单号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Valid_Until",
                        "paramType": "date",
                        "description": "有效期",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Remarks",
                        "paramType": "string(200)",
                        "description": "备注",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Outbaddress_Id",
                        "paramType": "string(32)",
                        "description": "出库地址ID",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Aging",
                        "paramType": "string(15)",
                        "description": "时效",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Virtual_Storehouse_No",
                        "paramType": "string(20)",
                        "description": "仓库编号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Is_Sceneprint",
                        "paramType": "string(2)",
                        "description": "是否现场打印",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Is_Receipt",
                        "paramType": "string(2)",
                        "description": "是否回单",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Ssa_No",
                        "paramType": "string(20)",
                        "description": "客户编号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Con_Id",
                        "paramType": "string(32)",
                        "description": "委托方ID",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Invoice_Staff",
                        "paramType": "string(40)",
                        "description": "开票员",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Recheck_Staff",
                        "paramType": "string(100)",
                        "description": "复核员",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Bill_Dtl_Id_Jzyc",
                        "paramType": "string(32)",
                        "description": "九州云仓ID\n唯一键",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "DefinedVarHdr2",
                        "paramType": "string(50)",
                        "description": "备用字段2",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "DefinedVarHdr3",
                        "paramType": "string(50)",
                        "description": "备用字段3",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Kilometers",
                        "paramType": "decimal(14,2)",
                        "description": "公里数",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Amount",
                        "paramType": "decimal(20,5)",
                        "description": "金额",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Bill_Hdr_Id",
                        "paramType": "string(32)",
                        "description": "单据ID",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Operator_Id",
                        "paramType": "string(32)",
                        "description": "运营方ID",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Bill_Dtl_Id_Old",
                        "paramType": "string(32)",
                        "description": "行号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Is_Reversion",
                        "paramType": "string(1)",
                        "description": "是否冲红",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Sale_Type",
                        "paramType": "string(2)",
                        "description": "销售类型\n1：销售出库\n2：调拨出库\n3：连锁\n4：购进退出\n5：库存整理\n6：直通订单\n7：煎药订单\n8：医院紧急配送\n9：寄售订单\n12：移仓出库\n13：业主转换\n14：中转出库\n20：费列罗移仓订单\n21：多仓销售出库\n22：套包出库\n23：组合出库\n11：折价出库",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Goods_No",
                        "paramType": "string(20)",
                        "description": "商品编号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Ldc_Id",
                        "paramType": "string(32)",
                        "description": "物流中心ID",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Delivery_Address_Id",
                        "paramType": "string(32)",
                        "description": "送货地址ID",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Stock_Status",
                        "paramType": "string(1)",
                        "description": "库存状态\n1：合格\n2：不合格\n3：待验\n4：停售\n5：虚拟\n9：拒收\n9：在库待验",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Price",
                        "paramType": "decimal(14,5)",
                        "description": "单价",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Outbound_Mode",
                        "paramType": "string(10)",
                        "description": "出库方式\n1：出库待配\n2：普通配送\n3：整车配送",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Bill_Dtl_Id",
                        "paramType": "string(20)",
                        "description": "行号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Goods_Lotno",
                        "paramType": "string(15)",
                        "description": "商品批号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Delivery_Time",
                        "paramType": "dateTime",
                        "description": "送货日期",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Goods_Type",
                        "paramType": "string(4)",
                        "description": "产品大类",
                        "children": null
                    }
                ]
            }
        ],
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "gjtshc",
            "method": "post",
            "apiUrl": "/api-general/v1/gtsc",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"func_type\":\"select\",\"json_data\":{\"Businessbill_No\":\"\",\"Operator_Id\":\"\",\"Con_Id\":\"\",\"Sale_Type\":\"\",\"Invoice_Staff\":\"\"}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/api-general/v1/bhgptz",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "不合格品台账",
        "serviceCode": "bhgptz",
        "shareDesc": "不合格品台账",
        "apiDocTypeId": 32,
        "description": "查询不合格品台账记录的查询接口",
        "apiDesc": "查询不合格品台账记录的查询接口",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "func_type",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "select",
                "example": "select",
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "bhgptz",
                "paramLocation": "body",
                "isNeed": "否",
                "description": null,
                "example": null,
                "children": [
                    {
                        "paramName": "Ldc_Id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "物流中心ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Operator_Id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "运营方ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Con_Id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "委托方ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Start_Date",
                        "paramType": "date",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "开始日期",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "End_Date",
                        "paramType": "date",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "结束日期",
                        "example": null,
                        "children": null
                    }
                ]
            }
        ],
        "responseParamList": [
            {
                "statusCode": "200",
                "paramName": null,
                "paramType": "bhgptzResponse",
                "description": "不合格品台账成功",
                "children": [
                    {
                        "statusCode": null,
                        "paramName": "Package_Unit",
                        "paramType": "string",
                        "description": "包装单位",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Production_Date",
                        "paramType": "date",
                        "description": "生产日期",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Rp_Reasons",
                        "paramType": "string",
                        "description": "退货原因",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Universal_Name",
                        "paramType": "string",
                        "description": "通用名",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Actual_Qty",
                        "paramType": "decimal",
                        "description": "数量",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Actual_Sps",
                        "paramType": "decimal",
                        "description": "零散数",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Businessbill_No",
                        "paramType": "string",
                        "description": "业务单据编号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Invoice_Time",
                        "paramType": "string",
                        "description": "开票时间",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Receiving_Clerk",
                        "paramType": "string",
                        "description": "收货员",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Handling_Suggestion",
                        "paramType": "string",
                        "description": "处理意见",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Valid_Until",
                        "paramType": "date",
                        "description": "有效期",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Manufacturer",
                        "paramType": "string",
                        "description": "生产厂家",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "InstoreBill_No_LMIS",
                        "paramType": "string",
                        "description": "LMIS单号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Ssa_Name",
                        "paramType": "string",
                        "description": "单位名称",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Ssa_No",
                        "paramType": "string",
                        "description": "单位编码",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Storage_Condition",
                        "paramType": "string",
                        "description": "存储条件",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Approval_No",
                        "paramType": "string",
                        "description": "批准文号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Package_Qty",
                        "paramType": "string",
                        "description": "包装数量",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Amount",
                        "paramType": "decimal",
                        "description": "金额",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Drug_Spec",
                        "paramType": "string",
                        "description": "药品规格",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Goods_No",
                        "paramType": "string",
                        "description": "商品编号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Goods_Name",
                        "paramType": "string",
                        "description": "商品名称",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Actual_Pcs",
                        "paramType": "decimal",
                        "description": "件数",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Lot_No",
                        "paramType": "string",
                        "description": "批号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Quality_Time",
                        "paramType": "string",
                        "description": "质检日期",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Quality_Inspector",
                        "paramType": "string",
                        "description": "质检员",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Price",
                        "paramType": "decimal",
                        "description": "单价",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Con_Name",
                        "paramType": "string",
                        "description": "委托方名称",
                        "children": null
                    }
                ]
            }
        ],
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "bhgptz",
            "method": "post",
            "apiUrl": "/api-general/v1/bhgptz",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"func_type\":\"select\",\"json_data\":{\"Ldc_Id\":\"\",\"Operator_Id\":\"\",\"Con_Id\":\"\",\"Start_Date\":\"\",\"End_Date\":\"\"}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/api-general/query/v1/query_kcztbh",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "库存状态变化回传接口",
        "serviceCode": "query_kcztbh",
        "shareDesc": "库存状态变化回传接口",
        "apiDocTypeId": 32,
        "description": "仓库产生库存状态变化后，库存变化结果查询接口",
        "apiDesc": "仓库产生库存状态变化后，库存变化结果查询接口",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "func_type",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "select",
                "example": "select",
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "queryKcztbh",
                "paramLocation": "body",
                "isNeed": "否",
                "description": null,
                "example": null,
                "children": [
                    {
                        "paramName": "Ldc_Id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "物流中心ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Businessbill_No",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "业务单据编号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Operator_Id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "运营方ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Con_Id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "委托方ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Start_Date",
                        "paramType": "date",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "开始日期",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "End_Date",
                        "paramType": "date",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "结束日期",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "Goods_No",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "商品编号",
                        "example": null,
                        "children": null
                    }
                ]
            }
        ],
        "responseParamList": [
            {
                "statusCode": "200",
                "paramName": null,
                "paramType": "queryKcztbhResponse",
                "description": "库存状态变化回传接口成功",
                "children": [
                    {
                        "statusCode": null,
                        "paramName": "Package_Unit",
                        "paramType": "decimal",
                        "description": "包装单位",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Goods_Id",
                        "paramType": "string",
                        "description": "商品Id",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Production_Date",
                        "paramType": "date",
                        "description": "生产日期",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Changed_Quantity",
                        "paramType": "decimal",
                        "description": "变化数量",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "line_num",
                        "paramType": "string",
                        "description": "行号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Businessbill_No",
                        "paramType": "string",
                        "description": "业务单据编号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "CreateTime",
                        "paramType": "string",
                        "description": "生成时间",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "stock_status_new",
                        "paramType": "string",
                        "description": "新库存状态",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Lot_Id",
                        "paramType": "string",
                        "description": "批号Id",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Drug_Spec",
                        "paramType": "string",
                        "description": "药品规格",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Operator_Id",
                        "paramType": "string",
                        "description": "运营方ID",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Goods_No",
                        "paramType": "string",
                        "description": "商品编号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Goods_Name",
                        "paramType": "string",
                        "description": "商品名称",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Ldc_Id",
                        "paramType": "string",
                        "description": "物流中心ID",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Operator_Staff",
                        "paramType": "string",
                        "description": "操作人",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Dosage_Form",
                        "paramType": "decimal",
                        "description": "剂型",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Valid_Until",
                        "paramType": "date",
                        "description": "有效期至",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "stock_status_old",
                        "paramType": "string",
                        "description": "原库存状态",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Manufacturer",
                        "paramType": "string",
                        "description": "生产厂家",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Goods_Lotno",
                        "paramType": "string",
                        "description": "批号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Con_Id",
                        "paramType": "string",
                        "description": "委托方ID",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Producing_Area",
                        "paramType": "string",
                        "description": "产地",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Approval_No",
                        "paramType": "string",
                        "description": "批准文号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "Bill_Dtl_Id_Jzyc",
                        "paramType": "string",
                        "description": "九州云仓ID",
                        "children": null
                    }
                ]
            }
        ],
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "query_kcztbh",
            "method": "post",
            "apiUrl": "/api-general/query/v1/query_kcztbh",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"func_type\":\"select\",\"json_data\":{\"Ldc_Id\":\"\",\"Businessbill_No\":\"\",\"Operator_Id\":\"\",\"Con_Id\":\"\",\"Start_Date\":\"\",\"End_Date\":\"\",\"Goods_No\":\"\"}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/api-general/v1/goodsBackPlanCancel",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "商品召回追回计划取消接口（待开放）",
        "serviceCode": "goodsBackPlanCancel",
        "shareDesc": "商品召回追回计划取消接口（待开放）",
        "apiDocTypeId": 32,
        "description": "推送商品召回追回取消计划到九州通仓库",
        "apiDesc": "推送商品召回追回取消计划到九州通仓库",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "func_type",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "saveData",
                "example": "saveData",
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "goodsBackPlanCancel",
                "paramLocation": "body",
                "isNeed": "否",
                "description": null,
                "example": null,
                "children": [
                    {
                        "paramName": "businessbill_no",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "业务单据编号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "operator_id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "运营方ID",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "con_id",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "委托方ID",
                        "example": null,
                        "children": null
                    }
                ]
            }
        ],
        "responseParamList": null,
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "goodsBackPlanCancel",
            "method": "post",
            "apiUrl": "/api-general/v1/goodsBackPlanCancel",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"func_type\":\"saveData\",\"json_data\":{\"businessbill_no\":\"\",\"operator_id\":\"\",\"con_id\":\"\"}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    }
]
export const historyDataListV2 = [
    {
        "url": "/openapi/v2/OMS_UPKEEP_SAVE",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "养护指令推送",
        "serviceCode": "OMS_UPKEEP_SAVE",
        "shareDesc": "养护指令推送",
        "apiDocTypeId": 2,
        "description": "养护指令推送",
        "apiDesc": "养护指令推送",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "partner_id",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "合作伙伴编码(即顾客编码),和token一起生成",
                "example": null,
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "YHZLTS",
                "paramLocation": "body",
                "isNeed": "否",
                "description": "保存内容",
                "example": null,
                "children": [
                    {
                        "paramName": "hdr",
                        "paramType": "YHZLTShdr",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "汇总json组",
                        "example": null,
                        "children": [
                            {
                                "paramName": "ldc_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "物流中心ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "upkeep_type",
                                "paramType": "string(2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "养护类型（1:普通养护 2:重点养护）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "businessbill_no",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "业务单号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "operator_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "运营方ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "con_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "danjxc_side",
                                "paramType": "string(10)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "单据下传方",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "invoice_staff",
                                "paramType": "string(60)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "制单员",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "invoice_time",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "制单时间",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "upkeep_date",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "养护日期",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "remarks",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "备注",
                                "example": null,
                                "children": null
                            }
                        ]
                    },
                    {
                        "paramName": "dtls",
                        "paramType": "array[YHZLTSdtl]",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "汇总明细组",
                        "example": null,
                        "children": [
                            {
                                "paramName": "upkeep_reason",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "养护原因",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "valid_until",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "有效期\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "stock_status",
                                "paramType": "string(1)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "库存状态\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "actual_qty",
                                "paramType": "decimal(14.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "数量\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_lotno",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "批号\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_code",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "无ID的货主，商品编号、货主商品ID传同一个值即可。\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_no",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "商品编号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "production_date",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "生产日期\n\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "bill_dtl_no",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "明细行号\n",
                                "example": null,
                                "children": null
                            }
                        ]
                    }
                ]
            }
        ],
        "responseParamList": [
            {
                "statusCode": "200",
                "paramName": null,
                "paramType": "成功/失败",
                "description": "",
                "children": [
                    {
                        "statusCode": null,
                        "paramName": "code",
                        "paramType": "string(10)",
                        "description": "状态码（正常：200；异常：500；token无效：2000）",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "data",
                        "paramType": "array",
                        "description": "json数据（非查询类均为空）",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "message",
                        "paramType": "string(200)",
                        "description": "描述信息",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "timestamp",
                        "paramType": "string(50)",
                        "description": "时间戳",
                        "children": null
                    }
                ]
            }
        ],
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "OMS_UPKEEP_SAVE",
            "method": "post",
            "apiUrl": "/openapi/v2/OMS_UPKEEP_SAVE",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"partner_id\":\"\",\"json_data\":{\"hdr\":{\"ldc_id\":\"\",\"upkeep_type\":\"\",\"businessbill_no\":\"\",\"operator_id\":\"\",\"con_id\":\"\",\"danjxc_side\":\"\",\"invoice_staff\":\"\",\"invoice_time\":\"\",\"upkeep_date\":\"\",\"remarks\":\"\"},\"dtls\":[{\"upkeep_reason\":\"\",\"valid_until\":\"\",\"stock_status\":\"\",\"actual_qty\":\"\",\"goods_lotno\":\"\",\"goods_code\":\"\",\"goods_no\":\"\",\"production_date\":\"\",\"bill_dtl_no\":\"\"}]}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/openapi/v2/OMS_GOODSBACK_SAVE",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "商品召回指令推送",
        "serviceCode": "OMS_GOODSBACK_SAVE",
        "shareDesc": "商品召回指令推送",
        "apiDocTypeId": 2,
        "description": "商品召回指令推送",
        "apiDesc": "商品召回指令推送",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "partner_id",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "合作伙伴编码(即顾客编码),和token一起生成",
                "example": null,
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "商品召回指令推送",
                "paramLocation": "body",
                "isNeed": "否",
                "description": "保存内容",
                "example": null,
                "children": [
                    {
                        "paramName": "hdr",
                        "paramType": "商品召回指令推送hdr",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "汇总json组",
                        "example": null,
                        "children": [
                            {
                                "paramName": "ldc_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "物流中心ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "businessbill_no",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "业务单号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "operator_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "运营方ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "con_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "danjxc_side",
                                "paramType": "string(10)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "单据下传方",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "invoice_staff",
                                "paramType": "string(60)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "制单员",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "invoice_time",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "制单时间",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "remarks",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "备注（传订单备注信息）",
                                "example": null,
                                "children": null
                            }
                        ]
                    },
                    {
                        "paramName": "dtls",
                        "paramType": "array[商品召回指令推送dtls]",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "明细json组",
                        "example": null,
                        "children": [
                            {
                                "paramName": "end_date",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "结束日期（召回结束时间）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "valid_until",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "有效期（批号不为空时，有效期不能为空）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "plan_back_qty",
                                "paramType": "decimal(14.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "计划召回数量",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_lotno",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "批号（多个批号需要分多行传）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "back_reason",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "召回原因（传中文）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_no",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "商品编号（单据下传方=0时，传商品内码，按商品内码转换后存值，不再取商品编号\n单据下传方=1时，传商品编号，按商品编码找商品资料）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "production_date",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "生产日期（批号不为空时，生产日期不能为空）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "effective_date",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "生效日期（召回生效时间）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "bill_dtl_no",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "明细行号",
                                "example": null,
                                "children": null
                            }
                        ]
                    }
                ]
            }
        ],
        "responseParamList": null,
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "OMS_GOODSBACK_SAVE",
            "method": "post",
            "apiUrl": "/openapi/v2/OMS_GOODSBACK_SAVE",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"partner_id\":\"\",\"json_data\":{\"hdr\":{\"ldc_id\":\"\",\"businessbill_no\":\"\",\"operator_id\":\"\",\"con_id\":\"\",\"danjxc_side\":\"\",\"invoice_staff\":\"\",\"invoice_time\":\"\",\"remarks\":\"\"},\"dtls\":[{\"end_date\":\"\",\"valid_until\":\"\",\"plan_back_qty\":\"\",\"goods_lotno\":\"\",\"back_reason\":\"\",\"goods_no\":\"\",\"production_date\":\"\",\"effective_date\":\"\",\"bill_dtl_no\":\"\"}]}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/openapi/v2/OMS_STPL_RESULT_SAVE ",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "盘点审核结果推送",
        "serviceCode": "OMS_STPL_RESULT_SAVE",
        "shareDesc": "盘点审核结果推送",
        "apiDocTypeId": 2,
        "description": "盘点审核结果推送",
        "apiDesc": "盘点审核结果推送",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "partner_id",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "合作伙伴编码(即顾客编码),和token一起生成",
                "example": null,
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "PDSHTS",
                "paramLocation": "body",
                "isNeed": "否",
                "description": "保存内容",
                "example": null,
                "children": [
                    {
                        "paramName": "hdr",
                        "paramType": "PDSHTShdr",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "汇总json组",
                        "example": null,
                        "children": [
                            {
                                "paramName": "ldc_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "物流中心ID\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "businessbill_no",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "盘点业务单号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "operator_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "运营方ID\n\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "con_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主ID\n",
                                "example": null,
                                "children": null
                            }
                        ]
                    },
                    {
                        "paramName": "dtls",
                        "paramType": "array[PDSHTSdtl]",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "明细json组",
                        "example": null,
                        "children": [
                            {
                                "paramName": "audit_time",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "审核时间",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "ish_serial_number",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "进场流水号\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "actual_qty",
                                "paramType": "decimal(14.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "数量",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "audit_staff",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "审核人\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "bill_dtl_wms",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "单据明细ID（WMS盘点申请单明细ID）\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "audit_status",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "审核状态（1：审核通过\n0：驳回）\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "audit_view",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "审核意见\n",
                                "example": null,
                                "children": null
                            }
                        ]
                    }
                ]
            }
        ],
        "responseParamList": null,
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "OMS_STPL_RESULT_SAVE",
            "method": "post",
            "apiUrl": "/openapi/v2/OMS_STPL_RESULT_SAVE ",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"partner_id\":\"\",\"json_data\":{\"hdr\":{\"ldc_id\":\"\",\"businessbill_no\":\"\",\"operator_id\":\"\",\"con_id\":\"\"},\"dtls\":[{\"audit_time\":\"\",\"ish_serial_number\":\"\",\"actual_qty\":\"\",\"audit_staff\":\"\",\"bill_dtl_wms\":\"\",\"audit_status\":\"\",\"audit_view\":\"\"}]}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/openapi/v2/OMS_GOODSBACKCANCEL_SAVE",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "商品召回指令取消",
        "serviceCode": "OMS_GOODSBACKCANCEL_SAVE",
        "shareDesc": "商品召回指令取消",
        "apiDocTypeId": 2,
        "description": "商品召回指令取消",
        "apiDesc": "商品召回指令取消",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "partner_id",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "合作伙伴编码(即顾客编码),和token一起生成",
                "example": null,
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "SPZHZLQXTS",
                "paramLocation": "body",
                "isNeed": "否",
                "description": "保存内容",
                "example": null,
                "children": [
                    {
                        "paramName": "hdr",
                        "paramType": "SPZHZLQXTShdr",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "汇总json组",
                        "example": null,
                        "children": [
                            {
                                "paramName": "ldc_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "物流中心ID（通过配置表获取ID）\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "businessbill_no",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "业务单号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "operator_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "运营方ID（可以不传，绑定账户）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "con_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主ID（通过配置表获取ID）\n\n\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "cancel_reasons",
                                "paramType": "string(400)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "取消原因",
                                "example": null,
                                "children": null
                            }
                        ]
                    }
                ]
            }
        ],
        "responseParamList": [
            {
                "statusCode": "200",
                "paramName": null,
                "paramType": "成功/失败",
                "description": "",
                "children": [
                    {
                        "statusCode": null,
                        "paramName": "code",
                        "paramType": "string(10)",
                        "description": "状态码（正常：200；异常：500；token无效：2000）",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "data",
                        "paramType": "array",
                        "description": "json数据（非查询类均为空）",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "message",
                        "paramType": "string(200)",
                        "description": "描述信息",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "timestamp",
                        "paramType": "string(50)",
                        "description": "时间戳",
                        "children": null
                    }
                ]
            }
        ],
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "OMS_GOODSBACKCANCEL_SAVE",
            "method": "post",
            "apiUrl": "/openapi/v2/OMS_GOODSBACKCANCEL_SAVE",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"partner_id\":\"\",\"json_data\":{\"hdr\":{\"ldc_id\":\"\",\"businessbill_no\":\"\",\"operator_id\":\"\",\"con_id\":\"\",\"cancel_reasons\":\"\"}}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/openapi/v2/OMS_STOCKSHARING_SAVE",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "库存共享单推送",
        "serviceCode": "OMS_STOCKSHARING_SAVE",
        "shareDesc": "库存共享单推送",
        "apiDocTypeId": 2,
        "description": "库存共享单推送",
        "apiDesc": "库存共享单推送",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "partner_id",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "合作伙伴编码(即顾客编码),和token一起生成",
                "example": null,
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "KCGXDTS",
                "paramLocation": "body",
                "isNeed": "否",
                "description": "保存内容",
                "example": null,
                "children": [
                    {
                        "paramName": "hdr",
                        "paramType": "KCGXDTShdr",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "汇总json组",
                        "example": null,
                        "children": [
                            {
                                "paramName": "ssa_no",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主客户编号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "erp_source",
                                "paramType": "string(30)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "上游系统订单来源（erp_source）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "usage_name_purchase",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "采购用途名称",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "contactperson",
                                "paramType": "string(128)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "收件人",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "borg_id_purchase",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "采购业务组织id",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "operator_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "运营方ID（可以不传，绑定账户）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "store_no",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主仓库编号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "con_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "supplier_no",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主供应商编号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "danjxc_side",
                                "paramType": "string(10)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "单据下传方",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "invoice_time",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "制单时间",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "business_staff",
                                "paramType": "string(60)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "业务员（传中文名称）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "is_sharingbill",
                                "paramType": "string(2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "是否库存共享订单（0：否\n1：是\n默认传1）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "businessbill_no_sale",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "销售业务单号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "sharingstore_no",
                                "paramType": "string(255)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "共享仓库编号（原出库单的仓库NO,ERP的branch_id）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "platform_order_no",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "平台订单号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "usage_name_sale",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "销售用途名称",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "ldc_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "物流中心ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "borg_id_sale",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "销售业务组织id",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "businessbill_no",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "库存共享单号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "contactprovince",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "收件人省",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "contactarea",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "收件人区",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "contactphone",
                                "paramType": "string(400)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "收件人电话\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "channel_type",
                                "paramType": "string(5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "渠道类型（ZD：终端；QT：其它）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "borg_name_sale",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "销售业务组织名称",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "platform_bill_num",
                                "paramType": "integer",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "平台订单数",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "erp_platform_bill_num",
                                "paramType": "integer",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "平台子单数\t",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "con_no",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主编号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "transport_goodsmode",
                                "paramType": "string(2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "运输模式（00：不确定\n01：自配\n02：托运\n03：快递\n04：自提\n05：干支线\n默认传自提）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "erp_platform_bill_no",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "平台子单号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "takegoods_mode",
                                "paramType": "string(10)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "提货方式（1：自提\n3：托运（库存共享托运3转21）\n4：市内配送(库存共享市内配送4转19)\n5：市外配送(库存共享市外配送5转20)\n6：调拨\n10：消费品托运\n17：托运（KD）\n默认传自提）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "ssa_code",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主客户ID（无ID的货主，客户编号、货主客户ID传同一个值即可。）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "erp_branchid",
                                "paramType": "string(30)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "上游系统分公司标识ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "businessbill_no sale old ",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "原销售单号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "buyer",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "采购员",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "businessbill_no_purchase",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "采购业务单号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "usage_id_purchase",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "采购用途id",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "borg_name_purchase",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "采购业务组织名称",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "invoice_staff",
                                "paramType": "string(60)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "制单员",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_type",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "商品类型（1：西药\n2：中药\n3：计生\n4：器械\n5：原料药\n6：第三方\n7：赠品\n10：消费品\n12：可混开\n13：中药(大袋)\n23：食品\n27：基药\n28：保健食品\n29：原料药中间体\n30：化工品）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "aging",
                                "paramType": "string(2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "时效类型（01：配中\n02：当日达\n03：次日达）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "usage_id_sale",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "销售用途id",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "consigneeadd",
                                "paramType": "string(400)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "收件人详细地址\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "supplier_code",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主供应商ID（无ID的货主，客户编号、货主客户ID传同一个值即可。）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "contactcity",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "收件人市",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "relevant_warehouse_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "内转仓库ID（原出库单的仓库ID,ERP的仓库ID）",
                                "example": null,
                                "children": null
                            }
                        ]
                    },
                    {
                        "paramName": "dtls",
                        "paramType": "array[KCGXDTSdtl]",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "明细json组",
                        "example": null,
                        "children": [
                            {
                                "paramName": "sterilization_lotno",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "灭菌批号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "price_purchase",
                                "paramType": "decimal(22.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "购进单价",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "sorg_name",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "库存组织名称",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "stock_status",
                                "paramType": "string(1)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "库存状态（1 合格\n2 不合格\n3 入库待验\n4 停售\n5 在库待验\n6 待处理\n7 待处理(退货)\n9 虚拟库存）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "amount_purchase",
                                "paramType": "decimal(22.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "购进金额",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "sorg_id",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "库存组织id",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "lotno_request",
                                "paramType": "string(30)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "批号要求（1：单一批号\n2：新批号\n3：单一新批号\n4：无要求\n5：清理批号）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_lotno",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "批号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "approval_no",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "批准文号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_code",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主商品id（无ID的货主，商品编号、货主商品ID传同一个值即可。）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_no",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "商品编号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "production_date",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "生产日期",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "bill_dtl_no",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "明细行号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "valid_until",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "有效期",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "actual_qty",
                                "paramType": "decimal(14.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "数量",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "price_sale",
                                "paramType": "decimal(22.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "销售单价",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "amount_sale",
                                "paramType": "decimal(22.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "销售金额",
                                "example": null,
                                "children": null
                            }
                        ]
                    }
                ]
            }
        ],
        "responseParamList": null,
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "OMS_STOCKSHARING_SAVE",
            "method": "post",
            "apiUrl": "/openapi/v2/OMS_STOCKSHARING_SAVE",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"partner_id\":\"\",\"json_data\":{\"hdr\":{\"ssa_no\":\"\",\"erp_source\":\"\",\"usage_name_purchase\":\"\",\"contactperson\":\"\",\"borg_id_purchase\":\"\",\"operator_id\":\"\",\"store_no\":\"\",\"con_id\":\"\",\"supplier_no\":\"\",\"danjxc_side\":\"\",\"invoice_time\":\"\",\"business_staff\":\"\",\"is_sharingbill\":\"\",\"businessbill_no_sale\":\"\",\"sharingstore_no\":\"\",\"platform_order_no\":\"\",\"usage_name_sale\":\"\",\"ldc_id\":\"\",\"borg_id_sale\":\"\",\"businessbill_no\":\"\",\"contactprovince\":\"\",\"contactarea\":\"\",\"contactphone\":\"\",\"channel_type\":\"\",\"borg_name_sale\":\"\",\"platform_bill_num\":\"\",\"erp_platform_bill_num\":\"\",\"con_no\":\"\",\"transport_goodsmode\":\"\",\"erp_platform_bill_no\":\"\",\"takegoods_mode\":\"\",\"ssa_code\":\"\",\"erp_branchid\":\"\",\"businessbill_no sale old \":\"\",\"buyer\":\"\",\"businessbill_no_purchase\":\"\",\"usage_id_purchase\":\"\",\"borg_name_purchase\":\"\",\"invoice_staff\":\"\",\"goods_type\":\"\",\"aging\":\"\",\"usage_id_sale\":\"\",\"consigneeadd\":\"\",\"supplier_code\":\"\",\"contactcity\":\"\",\"relevant_warehouse_id\":\"\"},\"dtls\":[{\"sterilization_lotno\":\"\",\"price_purchase\":\"\",\"sorg_name\":\"\",\"stock_status\":\"\",\"amount_purchase\":\"\",\"sorg_id\":\"\",\"lotno_request\":\"\",\"goods_lotno\":\"\",\"approval_no\":\"\",\"goods_code\":\"\",\"goods_no\":\"\",\"production_date\":\"\",\"bill_dtl_no\":\"\",\"valid_until\":\"\",\"actual_qty\":\"\",\"price_sale\":\"\",\"amount_sale\":\"\"}]}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/openapi/v2/OMS_ADJUSTMENT_BATCH",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "销售调批",
        "serviceCode": "OMS_ADJUSTMENT_BATCH",
        "shareDesc": "销售调批",
        "apiDocTypeId": 2,
        "description": "销售调批",
        "apiDesc": "销售调批",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "partner_id",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "合作伙伴编码(即顾客编码),和token一起生成",
                "example": null,
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "OMS_ADJUSTMENT_BATCH",
                "paramLocation": "body",
                "isNeed": "否",
                "description": "保存内容",
                "example": null,
                "children": [
                    {
                        "paramName": "hdr",
                        "paramType": "销售调批推送hdr",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "汇总json组",
                        "example": null,
                        "children": [
                            {
                                "paramName": "Audit_State",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "申核状态\n0:通过，1:驳回",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "rejection_Reason",
                                "paramType": "string(500)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "驳回原因",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "ldc_Id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "物流中心ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Warehouse_Id",
                                "paramType": "string(5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "仓库id(具体是下传到那个物流中心)",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Stock_Org_Id",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "库存组织",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Owner_No",
                                "paramType": "string(3)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "业主编号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Created_Time",
                                "paramType": "date",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "生成时间",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Businessbill_No",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "单据编号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Request_No",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "申请单编号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Buyer",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "采购员",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Operator_Id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "运营方ID",
                                "example": null,
                                "children": null
                            }
                        ]
                    },
                    {
                        "paramName": "dtls",
                        "paramType": "array[销售调批推送dtls]",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "明细json组",
                        "example": null,
                        "children": [
                            {
                                "paramName": "Request_Line",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "申请单行号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Goods_Id",
                                "paramType": "string(11)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "商品内码",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Supper_Businessbill_No",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "销退单据编号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Actual_Qty",
                                "paramType": "decimal(22,5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "数量",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Goods_Lotno_Sale",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "销售批号(批号)",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Businessman",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "业务员",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Invoice_Time",
                                "paramType": "date",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "开票日期",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Sale_Amount",
                                "paramType": "decimal(22,5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "销售金额",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Goods_Lotno_Tz",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "销退批号(调整批号)",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Sale_Ssa_Id",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "销售单位内码",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Sale_Businessbill_No",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "销售单据编号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Sale_Price",
                                "paramType": "decimal(22,5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "销售单价",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Dj_Sort",
                                "paramType": "string(15)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "单据行号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Supper_Ssa_Id",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "销退单位内码",
                                "example": null,
                                "children": null
                            }
                        ]
                    }
                ]
            }
        ],
        "responseParamList": null,
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "OMS_ADJUSTMENT_BATCH",
            "method": "post",
            "apiUrl": "/openapi/v2/OMS_ADJUSTMENT_BATCH",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"partner_id\":\"\",\"json_data\":{\"hdr\":{\"Audit_State\":\"\",\"rejection_Reason\":\"\",\"ldc_Id\":\"\",\"Warehouse_Id\":\"\",\"Stock_Org_Id\":\"\",\"Owner_No\":\"\",\"Created_Time\":\"\",\"Businessbill_No\":\"\",\"Request_No\":\"\",\"Buyer\":\"\",\"Operator_Id\":\"\"},\"dtls\":[{\"Request_Line\":\"\",\"Goods_Id\":\"\",\"Supper_Businessbill_No\":\"\",\"Actual_Qty\":\"\",\"Goods_Lotno_Sale\":\"\",\"Businessman\":\"\",\"Invoice_Time\":\"\",\"Sale_Amount\":\"\",\"Goods_Lotno_Tz\":\"\",\"Sale_Ssa_Id\":\"\",\"Sale_Businessbill_No\":\"\",\"Sale_Price\":\"\",\"Dj_Sort\":\"\",\"Supper_Ssa_Id\":\"\"}]}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "https://apibox56jzt.com/gateway/openapi/v2/MDB_SUPPLIERS_CHAPTER_SAVE",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "供应商印章印模资料推送",
        "serviceCode": "MDB_SUPPLIERS_CHAPTER_SAVE",
        "shareDesc": "供应商印章印模资料推送",
        "apiDocTypeId": 7,
        "description": "供应商印章印模资料推送",
        "apiDesc": "供应商印章印模资料推送",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "partner_id",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "合作伙伴编码(即顾客编码),和token一起生成",
                "example": null,
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "gysyzymzl",
                "paramLocation": "body",
                "isNeed": "否",
                "description": "保存内容",
                "example": null,
                "children": [
                    {
                        "paramName": "hdr",
                        "paramType": "gysyzymzl_hdr",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": null,
                        "example": null,
                        "children": [
                            {
                                "paramName": "file",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "文件对象",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "operator_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "运营方ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "con_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "chapter_type",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "文件类型\n1：印章印模模板\n2：随货同行单模板",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "supplier_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "供应商ID",
                                "example": null,
                                "children": null
                            }
                        ]
                    }
                ]
            }
        ],
        "responseParamList": null,
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "MDB_SUPPLIERS_CHAPTER_SAVE",
            "method": "post",
            "apiUrl": "https://apibox56jzt.com/gateway/openapi/v2/MDB_SUPPLIERS_CHAPTER_SAVE",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"partner_id\":\"\",\"json_data\":{\"hdr\":{\"file\":\"\",\"operator_id\":\"\",\"con_id\":\"\",\"chapter_type\":\"\",\"supplier_id\":\"\"}}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/openapi/v2/OMS_INBOUND_STATUS",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "入库状态回传查询",
        "serviceCode": "OMS_INBOUND_STATUS",
        "shareDesc": "入库状态回传查询",
        "apiDocTypeId": 2,
        "description": "入库状态回传查询",
        "apiDesc": "入库状态回传查询",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "partner_id",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "合作伙伴编码(即顾客编码),和token一起生成",
                "example": null,
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "RKZTHCCX",
                "paramLocation": "body",
                "isNeed": "否",
                "description": "保存内容",
                "example": null,
                "children": [
                    {
                        "paramName": "hdr",
                        "paramType": "RKZTHCCXhdr",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "汇总json组",
                        "example": null,
                        "children": [
                            {
                                "paramName": "ldc_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "物流中心ID（通过配置表获取ID）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "businessbill_no",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "业务单号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "operator_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "运营方ID（可以不传，绑定账户）\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "con_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主ID（通过配置表获取ID）",
                                "example": null,
                                "children": null
                            }
                        ]
                    }
                ]
            }
        ],
        "responseParamList": [
            {
                "statusCode": "200",
                "paramName": null,
                "paramType": "返回结果",
                "description": "",
                "children": [
                    {
                        "statusCode": null,
                        "paramName": "hdr",
                        "paramType": null,
                        "description": "返回汇总json组",
                        "children": [
                            {
                                "statusCode": null,
                                "paramName": "ldc_id",
                                "paramType": "string(32)",
                                "description": "物流中心ID（通过配置表获取ID）",
                                "children": null
                            },
                            {
                                "statusCode": null,
                                "paramName": "businessbill_no",
                                "paramType": "string(50)",
                                "description": "业务单号",
                                "children": null
                            },
                            {
                                "statusCode": null,
                                "paramName": "operator_id",
                                "paramType": "string(32)",
                                "description": "运营方ID（可以不传，绑定账户）\n",
                                "children": null
                            },
                            {
                                "statusCode": null,
                                "paramName": "con_id",
                                "paramType": "string(32)",
                                "description": "货主ID（通过配置表获取ID）",
                                "children": null
                            }
                        ]
                    },
                    {
                        "statusCode": null,
                        "paramName": "dtl",
                        "paramType": null,
                        "description": "返回明细json组",
                        "children": [
                            {
                                "statusCode": null,
                                "paramName": "ish_businessbill_no",
                                "paramType": "string(50)",
                                "description": "收货单号（未收货时，收货单号为空）",
                                "children": null
                            },
                            {
                                "statusCode": null,
                                "paramName": "sorg_id",
                                "paramType": "string(100)",
                                "description": "库存组织id",
                                "children": null
                            },
                            {
                                "statusCode": null,
                                "paramName": "goods_lotno",
                                "paramType": "string(200)",
                                "description": "批号（10状态可能值为空）",
                                "children": null
                            },
                            {
                                "statusCode": null,
                                "paramName": "approval_no",
                                "paramType": "string(32)",
                                "description": "批准文号（10状态可能值为空）",
                                "children": null
                            },
                            {
                                "statusCode": null,
                                "paramName": "reject_pcs",
                                "paramType": "decimal(20)",
                                "description": "拒收件数",
                                "children": null
                            },
                            {
                                "statusCode": null,
                                "paramName": "goods_code",
                                "paramType": "string(32)",
                                "description": "货主商品id",
                                "children": null
                            },
                            {
                                "statusCode": null,
                                "paramName": "goods_no",
                                "paramType": "string(50)",
                                "description": "商品编号（货主商品编号）",
                                "children": null
                            },
                            {
                                "statusCode": null,
                                "paramName": "production_date",
                                "paramType": "dateTime",
                                "description": "生产日期（10状态可能值为空）",
                                "children": null
                            },
                            {
                                "statusCode": null,
                                "paramName": "quality_pcs",
                                "paramType": "decimal(20)",
                                "description": "\n质检合格件数",
                                "children": null
                            },
                            {
                                "statusCode": null,
                                "paramName": "package_spec",
                                "paramType": "string(100)",
                                "description": "包装规格（包装数量+包装单位）",
                                "children": null
                            },
                            {
                                "statusCode": null,
                                "paramName": "planned_pcs",
                                "paramType": "decimal(20)",
                                "description": "计划件数",
                                "children": null
                            },
                            {
                                "statusCode": null,
                                "paramName": "complete_pcs",
                                "paramType": "decimal(20)",
                                "description": "已收货完成件数\n",
                                "children": null
                            },
                            {
                                "statusCode": null,
                                "paramName": "bill_dtl_no",
                                "paramType": "string(32)",
                                "description": "明细行号（计划单明细行号）",
                                "children": null
                            },
                            {
                                "statusCode": null,
                                "paramName": "manufacturer",
                                "paramType": "string(150)",
                                "description": "生产厂家",
                                "children": null
                            },
                            {
                                "statusCode": null,
                                "paramName": "quality_sps",
                                "paramType": "decimal(14.5)",
                                "description": "质检合格零散数\n",
                                "children": null
                            },
                            {
                                "statusCode": null,
                                "paramName": "quality_qty",
                                "paramType": "decimal(22.5)",
                                "description": "质检合格数量",
                                "children": null
                            },
                            {
                                "statusCode": null,
                                "paramName": "reject_sps",
                                "paramType": "decimal(14.5)",
                                "description": "拒收零散数",
                                "children": null
                            },
                            {
                                "statusCode": null,
                                "paramName": "reject_qty",
                                "paramType": "decimal(22.5)",
                                "description": "拒收数量",
                                "children": null
                            },
                            {
                                "statusCode": null,
                                "paramName": "drug_spec",
                                "paramType": "string(100)",
                                "description": "规格",
                                "children": null
                            },
                            {
                                "statusCode": null,
                                "paramName": "marketing_authorisation_holder",
                                "paramType": "string(128)",
                                "description": "上市许可持有人",
                                "children": null
                            },
                            {
                                "statusCode": null,
                                "paramName": "planned_sps",
                                "paramType": "decimal(14.5)",
                                "description": "计划零散数",
                                "children": null
                            },
                            {
                                "statusCode": null,
                                "paramName": "planned_qty",
                                "paramType": "decimal(22.5)",
                                "description": "计划数量",
                                "children": null
                            },
                            {
                                "statusCode": null,
                                "paramName": "upshelf_pcs",
                                "paramType": "decimal(20)",
                                "description": "已上架件数\n",
                                "children": null
                            },
                            {
                                "statusCode": null,
                                "paramName": "actual_pcs",
                                "paramType": "decimal(20)",
                                "description": "已收货件数",
                                "children": null
                            },
                            {
                                "statusCode": null,
                                "paramName": "quality_nh_sps",
                                "paramType": "decimal(14.5)",
                                "description": "质检不合格零散数",
                                "children": null
                            },
                            {
                                "statusCode": null,
                                "paramName": "quality_nh_qty",
                                "paramType": "decimal(22.5)",
                                "description": "质检不合格数量",
                                "children": null
                            },
                            {
                                "statusCode": null,
                                "paramName": "goods_name",
                                "paramType": "string(128)",
                                "description": "商品名称（货主商品名称）",
                                "children": null
                            },
                            {
                                "statusCode": null,
                                "paramName": "sorg_name",
                                "paramType": "string(200)",
                                "description": "库存组织名称",
                                "children": null
                            },
                            {
                                "statusCode": null,
                                "paramName": "node_status",
                                "paramType": "string(2)",
                                "description": "操作节点状态\n（10：单据已接收\n30：已收货\n40：已验收\n50：已上架\n60：已收货完成，已回传业务系统）",
                                "children": null
                            },
                            {
                                "statusCode": null,
                                "paramName": "complete_sps",
                                "paramType": "decimal(14.5)",
                                "description": "已收货完成零散数\n\n",
                                "children": null
                            },
                            {
                                "statusCode": null,
                                "paramName": "complete_qty",
                                "paramType": "decimal(22.5)",
                                "description": "已收货完成数量",
                                "children": null
                            },
                            {
                                "statusCode": null,
                                "paramName": "node_time",
                                "paramType": "dateTime",
                                "description": "操作节点时间",
                                "children": null
                            },
                            {
                                "statusCode": null,
                                "paramName": "node_status_desc",
                                "paramType": "string(100)",
                                "description": "操作节点状态描述\n（操作节点状态中文描述）",
                                "children": null
                            },
                            {
                                "statusCode": null,
                                "paramName": "upshelf_sps",
                                "paramType": "string(14.5)",
                                "description": "已上架零散数\n",
                                "children": null
                            },
                            {
                                "statusCode": null,
                                "paramName": "upshelf_qty",
                                "paramType": "string(22.5)",
                                "description": "已上架数量\n",
                                "children": null
                            },
                            {
                                "statusCode": null,
                                "paramName": "valid_until",
                                "paramType": "dateTime",
                                "description": "有效期（10状态可能值为空）",
                                "children": null
                            },
                            {
                                "statusCode": null,
                                "paramName": "node_operator",
                                "paramType": "string(32)",
                                "description": "操作人员",
                                "children": null
                            },
                            {
                                "statusCode": null,
                                "paramName": "actual_sps",
                                "paramType": "decimal(14.5)",
                                "description": "已收货零散数",
                                "children": null
                            },
                            {
                                "statusCode": null,
                                "paramName": "actual_qty",
                                "paramType": "decimal(22.5)",
                                "description": "已收货数量",
                                "children": null
                            },
                            {
                                "statusCode": null,
                                "paramName": "quality_nh_pcs",
                                "paramType": "decimal(20)",
                                "description": "质检不合格件数",
                                "children": null
                            },
                            {
                                "statusCode": null,
                                "paramName": "tcm_producing_area",
                                "paramType": "string(128)",
                                "description": "中药产地",
                                "children": null
                            }
                        ]
                    }
                ]
            }
        ],
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "OMS_INBOUND_STATUS",
            "method": "post",
            "apiUrl": "/openapi/v2/OMS_INBOUND_STATUS",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"partner_id\":\"\",\"json_data\":{\"hdr\":{\"ldc_id\":\"\",\"businessbill_no\":\"\",\"operator_id\":\"\",\"con_id\":\"\"}}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/openapi/v2/OMS_OUTBOUND_SAVE",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "出库计划推送",
        "serviceCode": "OMS_OUTBOUND_SAVE",
        "shareDesc": "出库计划推送",
        "apiDocTypeId": 2,
        "description": "出库计划推送",
        "apiDesc": "出库计划推送",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "partner_id",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "合作伙伴编码(即顾客编码),和token一起生成",
                "example": null,
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "CKJHTS",
                "paramLocation": "body",
                "isNeed": "否",
                "description": "保存内容",
                "example": null,
                "children": [
                    {
                        "paramName": "hdr",
                        "paramType": "CKJHTShdr",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "汇总json组",
                        "example": null,
                        "children": [
                            {
                                "paramName": "ssa_no",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主客户编号：无单据客户资料对接接口时，客户名称需随单传",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "erp_source",
                                "paramType": "string(30)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "上游系统订单来源：erp_source",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "ssa_name",
                                "paramType": "string(150)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主客户名称：无单据客户资料对接接口时，客户名称需随单传",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "takegoods_mode_2nd",
                                "paramType": "string(2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "二级提货方式：1：自提\n3：托运\n4：市内配送\n5：市外配送\n6：调拨\n10：消费品托运\n17：托运（KD）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "operator_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "运营方ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "store_no",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主仓库编号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "danjxc_side",
                                "paramType": "string(10)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "单据下传方",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "business_staff",
                                "paramType": "string(60)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "业务员（传中文名称）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "operator",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "操作员：传业务员中文名称（非必填项，以说明为准）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "sharingstore_no",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "共享仓库编号（共享erp_storeid，是否库存共享订单=是，必须传）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "ssa_no_2nd",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主二级客户编号：无单据客户资料对接接口时，客户名称需随单传",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "ldc_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "物流中心ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "province",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "省份：1、无单独客户地址资料对接接口时，需要随单传\n2、若客户有二级单位，传二级单位对应的值",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "businessbill_no",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "业务单号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "taxreceipt_type",
                                "paramType": "string(2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "1：专\n2：普\n3：缓\n4：电普\n6：形式发票\n7：电专\n8：数电普\n9：数电专",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "personality_field_hdr",
                                "paramType": "string(500)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "个性字段",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Is_drawbackpricebill",
                                "paramType": "string(2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "是否退补价单：0：否\n1：是",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "ssa_code_2nd",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主二级客户ID：1、客户有二级单位时需传；\n2、无ID的货主，客户编号、货主客户ID传同一个值即可。",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "is_directtransfer",
                                "paramType": "string(2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "是否直调：0：否\n1：是",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "settleup_time",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "结算时间",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "area",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "区县：1、无单独客户地址资料对接接口时，需要随单传\n2、若客户有二级单位，传二级单位对应的值",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "con_no",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主编号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "transport_goodsmode",
                                "paramType": "string(2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "运输模式：00：不确定\n01：自配\n02：托运\n03：快递\n04：自提\n05：干支线",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "gift_provision_mode",
                                "paramType": "string(2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "赠品发放方式：1：随货同行\n2：不随货同行\n3：无",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "rebate_amount",
                                "paramType": "decimal(14.2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "返利金额",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "takegoods_mode",
                                "paramType": "string(10)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "提货方式：1：自提\n3：托运\n4：市内配送\n5：市外配送\n6：调拨\n10：消费品托运\n17：托运（KD）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "buyer",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "采购员",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "superbill_no",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "上级业务单号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "concat_name",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "收件人：1、无单独客户地址资料对接接口时，需要随单传\n2、若客户有二级单位，传二级单位对应的值",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "onlinepayment_amount",
                                "paramType": "decimal(14.2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "在线支付付款金额",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "owner_area",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "所属大区",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "is_lack_pick",
                                "paramType": "string(2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "是否允许缺拣（0: 否\n1: 是）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "invoice_staff",
                                "paramType": "string(60)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "制单员：传开票员中文名称",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "borg_id",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "业务组织id",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "erp_shop",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "上游系统店铺",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "virtual_storehouse_no",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "虚拟仓库编号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "wallet_pay_amount",
                                "paramType": "decimal(22.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "钱包支付金额",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "is_provide_gift",
                                "paramType": "string(2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "是否发放赠品：0：否\n1：是",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "city",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "城市：1、无单独客户地址资料对接接口时，需要随单传\n2、若客户有二级单位，传二级单位对应的值",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "con_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "movetck_id",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "移入仓编号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "ssa_name_2nd",
                                "paramType": "string(150)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主二级客户名称：无单据客户资料对接接口时，客户名称需随单传",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "invoice_time",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "制单时间",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "sale_type",
                                "paramType": "string(2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "销售类型：1：销售出库\n2：调拨出库\n4：购进退出\n5：库存整理\n7：煎药订单\n8：医院紧急配送\n9：寄售订单",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "credit_pay_amount",
                                "paramType": "decimal(22.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "资信支付金额",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "expressbill_num",
                                "paramType": "integer",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "快递单数",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "special_drug_unblending_amount",
                                "paramType": "decimal(14.2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "特药未勾兑金额",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "is_sharingbill",
                                "paramType": "string(2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "是否库存共享订单：0：否\n1：是",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "usage_id",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "用途id",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "taxreceipt_name",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "税票名称",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "platform_order_no",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "平台订单号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "originalbill_no",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "上游系统原始单据编号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "street",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "街道：1、无单独客户地址资料对接接口时，需要随单传\n2、若客户有二级单位，传二级单位对应的值",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "business_type",
                                "paramType": "string(2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "业务类型（1：购进入库\n2：销售出库\n3：购进退出\n4：销售退回\n10：赠品出库\n11：批号调整\n12：仓间调拨出库\n13：业主转换\n14：中转出库）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "express_corp",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "订单收件信息",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "channel_type",
                                "paramType": "string(5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "渠道类型（ZD：终端；QT：其它）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "address",
                                "paramType": "string(500)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "收件地址“”1、无单独客户地址资料对接接口时，需要随单传\n2、若客户有二级单位，传二级单位对应的值",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "usage_name",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "用途名称",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "borg_name",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "业务组织名称",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "taxreceipt_mode",
                                "paramType": "string(10)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "税票打印方式",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "ssa_code",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主客户ID：无ID的货主，客户编号、货主客户ID传同一个值即可。",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "is_print_ps_cont",
                                "paramType": "string(2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "是否打印购销合同：0：否\n1：是",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "erp_branchid",
                                "paramType": "string(30)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "上游系统分公司标识ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "settleup_type",
                                "paramType": "string(10)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "结算类型",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "sharingcon_no",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "共享货主编号（共享erp_branchid，是否库存共享订单=是，必须传）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "platform_num",
                                "paramType": "integer",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "平台拆单数",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "movefck_id",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "移出仓编号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_type",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "商品类型：1：西药\n2：中药\n3：计生\n4：器械\n5：原料药\n6：第三方\n7：赠品\n10：消费品\n12：可混开\n13：中药(大袋)\n23：食品\n27：基药\n28：保健食品\n29：原料药中间体\n30：化工品",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "aging",
                                "paramType": "string(2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "时效类型：01：当日达\n02：次日达\n03：隔日达",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "concat_phone",
                                "paramType": "string(80)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "收件联系电话：1、无单独客户地址资料对接接口时，需要随单传\n2、若客户有二级单位，传二级单位对应的值",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "remarks",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "备注",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "dispatching_type",
                                "paramType": "string(2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "调度类型：1：调度下发\n2：指定货位下发",
                                "example": null,
                                "children": null
                            }
                        ]
                    },
                    {
                        "paramName": "dtls",
                        "paramType": "array[CKJHTSdtl]",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "明细json组",
                        "example": null,
                        "children": [
                            {
                                "paramName": "flitting_costprice",
                                "paramType": "decimal(14.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "调拨成本价",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "sorg_id",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "库存组织id",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_lotno",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "批号：销售类型=购进退出时，需传输此字段，出库订单可传可不传",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_code",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主商品id：无ID的货主，商品编号、货主商品ID传同一个值即可。",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_no",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "商品编号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "production_date",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "生产日期：批号不为空时，生产日期不能为空",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "settleup_amount",
                                "paramType": "decimal(22.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "结算金额",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "transport_conversion_no",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "配送转换单据编号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "bill_dtl_no",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "明细行号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "rp_reasons",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "退货原因：购进退出需传此字段，传退货原因字典值，例如：开票原因、开错批号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "instorebill_no",
                                "paramType": "string(30)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "购进入库单号：销售类型=购进退出时，需传输此字段，为购进退出单据对应的原入库单据的业务单据编号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "price",
                                "paramType": "decimal(22.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "单价",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "taxreceipt_amount",
                                "paramType": "decimal(14.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "税票金额",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "back_diffprice",
                                "paramType": "decimal(14.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "退补价金额（单品折扣）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "sorg_name",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "库存组织名称",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "amount",
                                "paramType": "decimal(22.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "金额",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "stock_status",
                                "paramType": "string(1)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "库存状态（1 合格\n2 不合格\n3 入库待验\n4 停售\n5在库待验\n6待处理\n7 待处理 (退货)\n9 虚拟库存）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "batch_no",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "批次号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_no_jzt",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "商品编码JZT：用于库存共享业务多个委托方商品编码匹配",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "lotno_request",
                                "paramType": "string(30)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "批号要求：1：单一批号\n2：新批号\n3：单一新批号\n4：无要求\n5：清理批号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "valid_until",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "有效期：批号不为空时，有效期不能为空",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "actual_qty",
                                "paramType": "decimal(14.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "数量",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "personality_field_dtl",
                                "paramType": "string(500)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "个性字段",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "rp_cate",
                                "paramType": "string(2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "退货类别：1：合格\n2：不合格\n3：不限定",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "settleup_price",
                                "paramType": "decimal(22.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "结算单价",
                                "example": null,
                                "children": null
                            }
                        ]
                    }
                ]
            }
        ],
        "responseParamList": null,
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "OMS_OUTBOUND_SAVE",
            "method": "post",
            "apiUrl": "/openapi/v2/OMS_OUTBOUND_SAVE",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"partner_id\":\"\",\"json_data\":{\"hdr\":{\"ssa_no\":\"\",\"erp_source\":\"\",\"ssa_name\":\"\",\"takegoods_mode_2nd\":\"\",\"operator_id\":\"\",\"store_no\":\"\",\"danjxc_side\":\"\",\"business_staff\":\"\",\"operator\":\"\",\"sharingstore_no\":\"\",\"ssa_no_2nd\":\"\",\"ldc_id\":\"\",\"province\":\"\",\"businessbill_no\":\"\",\"taxreceipt_type\":\"\",\"personality_field_hdr\":\"\",\"Is_drawbackpricebill\":\"\",\"ssa_code_2nd\":\"\",\"is_directtransfer\":\"\",\"settleup_time\":\"\",\"area\":\"\",\"con_no\":\"\",\"transport_goodsmode\":\"\",\"gift_provision_mode\":\"\",\"rebate_amount\":\"\",\"takegoods_mode\":\"\",\"buyer\":\"\",\"superbill_no\":\"\",\"concat_name\":\"\",\"onlinepayment_amount\":\"\",\"owner_area\":\"\",\"is_lack_pick\":\"\",\"invoice_staff\":\"\",\"borg_id\":\"\",\"erp_shop\":\"\",\"virtual_storehouse_no\":\"\",\"wallet_pay_amount\":\"\",\"is_provide_gift\":\"\",\"city\":\"\",\"con_id\":\"\",\"movetck_id\":\"\",\"ssa_name_2nd\":\"\",\"invoice_time\":\"\",\"sale_type\":\"\",\"credit_pay_amount\":\"\",\"expressbill_num\":\"\",\"special_drug_unblending_amount\":\"\",\"is_sharingbill\":\"\",\"usage_id\":\"\",\"taxreceipt_name\":\"\",\"platform_order_no\":\"\",\"originalbill_no\":\"\",\"street\":\"\",\"business_type\":\"\",\"express_corp\":\"\",\"channel_type\":\"\",\"address\":\"\",\"usage_name\":\"\",\"borg_name\":\"\",\"taxreceipt_mode\":\"\",\"ssa_code\":\"\",\"is_print_ps_cont\":\"\",\"erp_branchid\":\"\",\"settleup_type\":\"\",\"sharingcon_no\":\"\",\"platform_num\":\"\",\"movefck_id\":\"\",\"goods_type\":\"\",\"aging\":\"\",\"concat_phone\":\"\",\"remarks\":\"\",\"dispatching_type\":\"\"},\"dtls\":[{\"flitting_costprice\":\"\",\"sorg_id\":\"\",\"goods_lotno\":\"\",\"goods_code\":\"\",\"goods_no\":\"\",\"production_date\":\"\",\"settleup_amount\":\"\",\"transport_conversion_no\":\"\",\"bill_dtl_no\":\"\",\"rp_reasons\":\"\",\"instorebill_no\":\"\",\"price\":\"\",\"taxreceipt_amount\":\"\",\"back_diffprice\":\"\",\"sorg_name\":\"\",\"amount\":\"\",\"stock_status\":\"\",\"batch_no\":\"\",\"goods_no_jzt\":\"\",\"lotno_request\":\"\",\"valid_until\":\"\",\"actual_qty\":\"\",\"personality_field_dtl\":\"\",\"rp_cate\":\"\",\"settleup_price\":\"\"}]}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/openapi/v2/OMS_SALERETURNSHARING_SAVE",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "销退共享订单推送",
        "serviceCode": "OMS_SALERETURNSHARING_SAVE",
        "shareDesc": "销退共享订单推送",
        "apiDocTypeId": 2,
        "description": "销退共享订单推送",
        "apiDesc": "销退共享订单推送",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "partner_id",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "合作伙伴编码(即顾客编码),和token一起生成",
                "example": null,
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "OMS_SALERETURNSHARING_SAVE",
                "paramLocation": "body",
                "isNeed": "否",
                "description": "保存内容",
                "example": null,
                "children": [
                    {
                        "paramName": "hdr",
                        "paramType": "OMS_SALERETURNSHARING_SAVEhdr",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "汇总json组",
                        "example": null,
                        "children": [
                            {
                                "paramName": "ssa_no",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "客户编号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "businessbill_no_sale_old",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "原销售单号\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "arrival_mode",
                                "paramType": "string(2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "到货方式（A1:待货入库 \nA2:提货入库）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "operator_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "运营方ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "con_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主ID\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "danjxc_side",
                                "paramType": "string(10)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "单据下传方(1：外部三方\n0：九州通内部公司)\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "invoice_time",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "制单时间",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "relevant_con_id",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "关联业主编号（共享退货业主）\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "businessbill_no_sale",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "销售业务单号\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "outstorebill_no",
                                "paramType": "string(30)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "出库单号（原出库单据的业务单号）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "relevant_bill_no",
                                "paramType": "string(30)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "关联单号（共享购退单号）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "relevant_ssa_no",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "关联客户编号（共享退货客户编号）\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "takegds_time",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "接货时间\n\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "tdeladdress_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "提货地址ID（不传默认取委托方地址）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "ldc_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "物流中心ID\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "businessbill_no",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "业务单据编号\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "business_type",
                                "paramType": "string(2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "入库类型",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "invoice_staff",
                                "paramType": "string(60)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "制单员（传固定值system）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_type",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "商品类型（1：西药\n2：中药\n3：计生\n4：器械\n5：原料药\n6：第三方\n7：赠品\n10：消费品\n12：可混开\n13：中药(大袋)\n23：食品\n27：基药\n28：保健食品\n29：原料药中间体\n30：化工品）\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "relevant_ldc_id",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "关联物流中心编号（共享业主仓库编号）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "remarks",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "备注",
                                "example": null,
                                "children": null
                            }
                        ]
                    },
                    {
                        "paramName": "dtls",
                        "paramType": "array[OMS_SALERETURNSHARING_SAVEdtl]",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "明细json组",
                        "example": null,
                        "children": [
                            {
                                "paramName": "sterilization_lotno",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "灭菌批号\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "sorg_name",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "库存组织名称",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "amount",
                                "paramType": "decimal(22.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "金额",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "batch_no",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "批次号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "stock_status",
                                "paramType": "string(1)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "库存状态（1 合格\n2 不合格\n3 入库待验\n4 停售\n5 在库待验\n6 待处理\n7 待处理（退货）\n9 虚拟库存）\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "sorg_id",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "库存组织id",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_lotno",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "批号\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "approval_no",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "批准文号\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_code",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主商品id（无ID的货主，商品编号、货主商品ID传同一个值即可。）\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_no",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "商品编号\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "production_date",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "生产日期\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "remarks_gt",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "购进退出备注",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "rp_reasons_gt",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "购进退出退货原因",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "bill_dtl_no",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "明细行号\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "valid_until",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "有效期\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "actual_qty",
                                "paramType": "decimal(14.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "数量\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "price",
                                "paramType": "decimal(22.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "单价",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "acceptance_check_rlt",
                                "paramType": "string(2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "验收评定（1: 合格 \n2:不合格  \n3:入库待验  \n4 停售\n5 在库待验\n6 待处理\n7 待处理（退货））",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "rp_reasons_xt",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "销售退回退货原因",
                                "example": null,
                                "children": null
                            }
                        ]
                    }
                ]
            }
        ],
        "responseParamList": null,
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "OMS_SALERETURNSHARING_SAVE",
            "method": "post",
            "apiUrl": "/openapi/v2/OMS_SALERETURNSHARING_SAVE",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"partner_id\":\"\",\"json_data\":{\"hdr\":{\"ssa_no\":\"\",\"businessbill_no_sale_old\":\"\",\"arrival_mode\":\"\",\"operator_id\":\"\",\"con_id\":\"\",\"danjxc_side\":\"\",\"invoice_time\":\"\",\"relevant_con_id\":\"\",\"businessbill_no_sale\":\"\",\"outstorebill_no\":\"\",\"relevant_bill_no\":\"\",\"relevant_ssa_no\":\"\",\"takegds_time\":\"\",\"tdeladdress_id\":\"\",\"ldc_id\":\"\",\"businessbill_no\":\"\",\"business_type\":\"\",\"invoice_staff\":\"\",\"goods_type\":\"\",\"relevant_ldc_id\":\"\",\"remarks\":\"\"},\"dtls\":[{\"sterilization_lotno\":\"\",\"sorg_name\":\"\",\"amount\":\"\",\"batch_no\":\"\",\"stock_status\":\"\",\"sorg_id\":\"\",\"goods_lotno\":\"\",\"approval_no\":\"\",\"goods_code\":\"\",\"goods_no\":\"\",\"production_date\":\"\",\"remarks_gt\":\"\",\"rp_reasons_gt\":\"\",\"bill_dtl_no\":\"\",\"valid_until\":\"\",\"actual_qty\":\"\",\"price\":\"\",\"acceptance_check_rlt\":\"\",\"rp_reasons_xt\":\"\"}]}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/openapi/v2/OMS_MOVEHOUSERETURN_SAVE",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "仓间调拨拒收退回单推送",
        "serviceCode": "OMS_MOVEHOUSERETURN_SAVE",
        "shareDesc": "仓间调拨拒收退回单推送",
        "apiDocTypeId": 2,
        "description": "仓间调拨拒收退回单推送",
        "apiDesc": "仓间调拨拒收退回单推送",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "partner_id",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "合作伙伴编码(即顾客编码),和token一起生成",
                "example": null,
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "CJDBJSTHDTS",
                "paramLocation": "body",
                "isNeed": "否",
                "description": "保存内容",
                "example": null,
                "children": [
                    {
                        "paramName": "hdr",
                        "paramType": "CJDBJSTHDTShdr",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "汇总json组",
                        "example": null,
                        "children": [
                            {
                                "paramName": "usage_name",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "用途名称",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "borg_name",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "业务组织名称",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "operator_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "运营方ID（可以不传，绑定账户）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "con_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主ID（通过配置表获取ID）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "danjxc_side",
                                "paramType": "string(10)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "单据下传方（1：外部三方\n0：九州通内部公司）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "invoice_time",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "制单时间",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "ldc_id_t",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "退入仓ID（通过配置表获取ID）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "usage_id",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "用途id",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "superbill_no",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "上级业务单号（对应移仓单的单据编号）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "businessbill_no",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "业务单号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "invoice_staff",
                                "paramType": "string(60)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "制单员（传中文名称）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_type",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "商品类型（1：西药\n2：中药\n3：计生\n4：器械\n5：原料药\n6：第三方\n7：赠品\n10：消费品\n12：可混开\n13：中药(大袋)\n23：食品\n27：基药\n28：保健食品\n29：原料药中间体\n30：化工品）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "borg_id",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "业务组织id",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "remarks",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "备注",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "ldc_id_f",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "退出仓ID（通过配置表获取ID）",
                                "example": null,
                                "children": null
                            }
                        ]
                    },
                    {
                        "paramName": "dtls",
                        "paramType": "array[CJDBJSTHDTSdtl]",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "明细json组",
                        "example": null,
                        "children": [
                            {
                                "paramName": "sorg_name",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "库存组织名称",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "amount",
                                "paramType": "decimal(22.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "金额",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "valid_until",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "有效期（批号不为空时，有效期不能为空）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "actual_qty",
                                "paramType": "decimal(14.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "数量",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "sorg_id",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "库存组织id",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_lotno",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "批号(销售类型=购进退出时，需传输此字段，出库订单可传可不传)",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "superbill_dtl_no",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "原始单据行号（对应移仓单的原行号）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_code",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主商品id（无ID的货主，商品编号、货主商品ID传同一个值即可。）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "price",
                                "paramType": "decimal(22.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "单价",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_no",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "商品编号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "production_date",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "生产日期(批号不为空时，生产日期不能为空)",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "bill_dtl_no",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "明细行号",
                                "example": null,
                                "children": null
                            }
                        ]
                    }
                ]
            }
        ],
        "responseParamList": null,
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "OMS_MOVEHOUSERETURN_SAVE",
            "method": "post",
            "apiUrl": "/openapi/v2/OMS_MOVEHOUSERETURN_SAVE",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"partner_id\":\"\",\"json_data\":{\"hdr\":{\"usage_name\":\"\",\"borg_name\":\"\",\"operator_id\":\"\",\"con_id\":\"\",\"danjxc_side\":\"\",\"invoice_time\":\"\",\"ldc_id_t\":\"\",\"usage_id\":\"\",\"superbill_no\":\"\",\"businessbill_no\":\"\",\"invoice_staff\":\"\",\"goods_type\":\"\",\"borg_id\":\"\",\"remarks\":\"\",\"ldc_id_f\":\"\"},\"dtls\":[{\"sorg_name\":\"\",\"amount\":\"\",\"valid_until\":\"\",\"actual_qty\":\"\",\"sorg_id\":\"\",\"goods_lotno\":\"\",\"superbill_dtl_no\":\"\",\"goods_code\":\"\",\"price\":\"\",\"goods_no\":\"\",\"production_date\":\"\",\"bill_dtl_no\":\"\"}]}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/openapi/v2/OUT_CONSIGNMENT",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "寄售临调出库推送",
        "serviceCode": "OUT_CONSIGNMENT",
        "shareDesc": "寄售临调出库推送",
        "apiDocTypeId": 2,
        "description": "寄售临调出库推送",
        "apiDesc": "寄售临调出库推送",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "partner_id",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "合作伙伴编码(即顾客编码),和token一起生成",
                "example": null,
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "寄售临调出库下传",
                "paramLocation": "body",
                "isNeed": "否",
                "description": null,
                "example": null,
                "children": [
                    {
                        "paramName": "hdr",
                        "paramType": "寄售临调出库下传hdr",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "汇总json组",
                        "example": null,
                        "children": [
                            {
                                "paramName": "gift_provision_mode",
                                "paramType": "string(2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "赠品发放方式\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "operator_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "运营方ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "con_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "takegoods_mode",
                                "paramType": "string(2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "提货方式\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "danjxc_side",
                                "paramType": "string(10)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "单据下传方（默认为0）\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "ssa_code",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主客户ID\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "invoice_time",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "制单时间\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "sale_type",
                                "paramType": "string(2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "销售类型\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "erp_branchid",
                                "paramType": "string(30)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "上游系统分公司标识ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "settleup_type",
                                "paramType": "string(10)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "结算类型（可以为空）\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "business_staff",
                                "paramType": "string(60)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "业务员\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "is_sharingbill",
                                "paramType": "string(2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "是否库存共享订单\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "store_no string",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主仓库编号 ",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "superbill_no",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "上级业务单号（可以为空）\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "ldc_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "物流中心ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "businessbill_no",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "业务单号\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "ssa_id_2nd",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "二级货主客户ID（可以为空）\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "business_type",
                                "paramType": "string(2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "业务类型\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "taxreceipt_type",
                                "paramType": "string(2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "税票类型（可以为空）\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_type",
                                "paramType": "string(2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "商品类型\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "aging",
                                "paramType": "decimal(14.3)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "时效类型\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Is_drawbackpricebill",
                                "paramType": "string(2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "是否退补价单\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "remarks",
                                "paramType": "string(500)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "备注\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "dispatching_type",
                                "paramType": "string(2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "调度类型\n",
                                "example": null,
                                "children": null
                            }
                        ]
                    },
                    {
                        "paramName": "dtls",
                        "paramType": "array[寄售临调出库下传dtls]",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "明细json组",
                        "example": null,
                        "children": [
                            {
                                "paramName": "sorg_name",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "库存组织名称",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "amount",
                                "paramType": "decimal(22.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "金额",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "actual_qty",
                                "paramType": "decimal(14.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "数量",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "sorg_id",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "库存组织id",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "lotno_request",
                                "paramType": "string(30)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "批号要求：1：单一批号 2：新批号 3：单一新批号 4：无要求 5：清理批号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_lotno",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "商品批号 销退不允许为空",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_code",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主商品id",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "price",
                                "paramType": "decimal(22.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "单价",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "taxreceipt_amount",
                                "paramType": "decimal(14.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "税票金额",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "settleup_amount",
                                "paramType": "decimal(22.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "结算金额",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "settleup_price",
                                "paramType": "decimal(22.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "结算单价",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "bill_dtl_no",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "明细行号",
                                "example": null,
                                "children": null
                            }
                        ]
                    }
                ]
            }
        ],
        "responseParamList": null,
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "OUT_CONSIGNMENT",
            "method": "post",
            "apiUrl": "/openapi/v2/OUT_CONSIGNMENT",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"partner_id\":\"\",\"json_data\":{\"hdr\":{\"gift_provision_mode\":\"\",\"operator_id\":\"\",\"con_id\":\"\",\"takegoods_mode\":\"\",\"danjxc_side\":\"\",\"ssa_code\":\"\",\"invoice_time\":\"\",\"sale_type\":\"\",\"erp_branchid\":\"\",\"settleup_type\":\"\",\"business_staff\":\"\",\"is_sharingbill\":\"\",\"store_no string\":\"\",\"superbill_no\":\"\",\"ldc_id\":\"\",\"businessbill_no\":\"\",\"ssa_id_2nd\":\"\",\"business_type\":\"\",\"taxreceipt_type\":\"\",\"goods_type\":\"\",\"aging\":\"\",\"Is_drawbackpricebill\":\"\",\"remarks\":\"\",\"dispatching_type\":\"\"},\"dtls\":[{\"sorg_name\":\"\",\"amount\":\"\",\"actual_qty\":\"\",\"sorg_id\":\"\",\"lotno_request\":\"\",\"goods_lotno\":\"\",\"goods_code\":\"\",\"price\":\"\",\"taxreceipt_amount\":\"\",\"settleup_amount\":\"\",\"settleup_price\":\"\",\"bill_dtl_no\":\"\"}]}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/api-general/v2/TMS_TRANSPORTATION_SAVE",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "运输计划推送",
        "serviceCode": "TMS_TRANSPORTATION_SAVE",
        "shareDesc": "运输计划推送",
        "apiDocTypeId": 2,
        "description": "运输计划推送",
        "apiDesc": "运输计划推送",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "partner_id",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "合作伙伴编码(即顾客编码),和token一起生成",
                "example": null,
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "TMS_TRANSPORTATION_SAVE",
                "paramLocation": "body",
                "isNeed": "否",
                "description": "保存内容",
                "example": null,
                "children": [
                    {
                        "paramName": "hdr",
                        "paramType": "TMS_TRANSPORTATION_SAVEhdr",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "汇总json组",
                        "example": null,
                        "children": [
                            {
                                "paramName": "biz_bill_no",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "业务单据编号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "ssa_name",
                                "paramType": "string(150)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "客户名称",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "contact_name",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "收件人",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "tdg_mode",
                                "paramType": "string(10)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "提货方式（th:上门提货\nsh:送货上门）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "address",
                                "paramType": "string(500)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "收件地址（需包含省份、城市、区县的标准三级地址）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "contact_phone",
                                "paramType": "string(80)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "收件联系电话",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "temper_request",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "温层要求（1：冷藏(2@8)\n2：冷冻(-20@-10)\n3：冷冻(-15@-5)\n4：冷藏(0@5)\n5：冷藏(5@25)\n6：冷冻(-20@-5)\n7：冷冻（-18@-30）\n8：冷冻（-15@-10）\n9：冷藏（-40@10）\n10：冷冻（-40@0））",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "operator_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "运营方ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "con_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "委托方ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "invoice_time",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "制单时间",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "is_sceneprint",
                                "paramType": "string(2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "是否现场打印（N：否\nY：是）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "takegds_time",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "提货时间",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "is_ receipt",
                                "paramType": "string(2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "是否回单（N：否\nY：是）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "vehicle_size",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "车辆大小（4.2m：4.2米\n5.2m：5.2米\n6.8m：6.8米\n7.2m：7.2米\n9.6m：9.6米\n15m：15米\n13.6m：13.6米）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "invoice_staff",
                                "paramType": "string(40)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "制单员",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "refrigeration_type",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "温层（00: 常温\n0：阴凉\n1：冷藏(2@8)\n2：冷冻(-20@-10)\n3：冷冻(-15@-5)\n4：冷藏(0@5)\n5：冷藏(5@25)\n6：冷冻(-20@-5)\n7：冷冻（-18@-30）\n8：冷冻（-15@-10）\n9：冷藏（-40@10）\n10：冷冻（-40@0）\n11：冷冻（-22@-18）\n12：冷冻（-25@-15）\n13：冷冻（-85@-15）\n14：冷藏(4@10)）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "vehicle_request",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "车辆要求（cwc：常温车\nlcc：冷藏车）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_type",
                                "paramType": "string(4)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "产品大类（8:冷藏品\n9:阴凉品）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "aging",
                                "paramType": "string(15)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "时效",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "delivery_mode",
                                "paramType": "string(10)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "送货方式（jzt:九州通配送\nkh:自行配送）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "remarks",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "备注",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "is_takestringge",
                                "paramType": "string(2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "是否运费托收（N：否\nY：是）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "transportplan_type",
                                "paramType": "string(15)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "运输计划类型（ptys:普通运输计划\nbcys:包车运输计划）",
                                "example": null,
                                "children": null
                            }
                        ]
                    },
                    {
                        "paramName": "dtls",
                        "paramType": "array[TMS_TRANSPORTATION_SAVEdtl]",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "明细json组",
                        "example": null,
                        "children": [
                            {
                                "paramName": "goods_name",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "商品名称",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "bill_dtl_id",
                                "paramType": "string(10)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "行号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "planned_volume",
                                "paramType": "decimal(14.2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "计划体积",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "takestringge_amount",
                                "paramType": "decimal(14.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "托收金额",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "planned_pcs",
                                "paramType": "decimal(14.2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "计划件数",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "planned_weight",
                                "paramType": "decimal(14.2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "计划重量",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_value",
                                "paramType": "decimal(14.2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "商品价值",
                                "example": null,
                                "children": null
                            }
                        ]
                    }
                ]
            }
        ],
        "responseParamList": null,
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "TMS_TRANSPORTATION_SAVE",
            "method": "post",
            "apiUrl": "/api-general/v2/TMS_TRANSPORTATION_SAVE",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"partner_id\":\"\",\"json_data\":{\"hdr\":{\"biz_bill_no\":\"\",\"ssa_name\":\"\",\"contact_name\":\"\",\"tdg_mode\":\"\",\"address\":\"\",\"contact_phone\":\"\",\"temper_request\":\"\",\"operator_id\":\"\",\"con_id\":\"\",\"invoice_time\":\"\",\"is_sceneprint\":\"\",\"takegds_time\":\"\",\"is_ receipt\":\"\",\"vehicle_size\":\"\",\"invoice_staff\":\"\",\"refrigeration_type\":\"\",\"vehicle_request\":\"\",\"goods_type\":\"\",\"aging\":\"\",\"delivery_mode\":\"\",\"remarks\":\"\",\"is_takestringge\":\"\",\"transportplan_type\":\"\"},\"dtls\":[{\"goods_name\":\"\",\"bill_dtl_id\":\"\",\"planned_volume\":\"\",\"takestringge_amount\":\"\",\"planned_pcs\":\"\",\"planned_weight\":\"\",\"goods_value\":\"\"}]}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/openapi/v2/OMS_STPL_SAVE",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "报升报损计划推送",
        "serviceCode": "OMS_STPL_SAVE",
        "shareDesc": "报升报损计划推送",
        "apiDocTypeId": 2,
        "description": "报升报损计划推送",
        "apiDesc": "报升报损计划推送",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "partner_id",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "合作伙伴编码(即顾客编码),和token一起生成",
                "example": null,
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "BSBSJHTS",
                "paramLocation": "body",
                "isNeed": "否",
                "description": "保存内容",
                "example": null,
                "children": [
                    {
                        "paramName": "hdr",
                        "paramType": "BSBSJHTShdr",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "汇总json组",
                        "example": null,
                        "children": [
                            {
                                "paramName": "ldc_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "物流中心ID\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "businessbill_no",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "业务单号\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "operator_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "运营方ID\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "con_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主ID\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "danjxc_side",
                                "paramType": "string(10)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "单据下传方\n\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "invoice_staff",
                                "paramType": "string(60)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "制单员\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "invoice_time",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "制单时间\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "remarks",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "备注",
                                "example": null,
                                "children": null
                            }
                        ]
                    },
                    {
                        "paramName": "dtls",
                        "paramType": "array[BSBSJHTSdtl]",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "明细json组",
                        "example": null,
                        "children": [
                            {
                                "paramName": "amount",
                                "paramType": "decimal(22.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "单价\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "valid_until",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "有效期（批号不为空时，有效期不能为空）\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "stock_status",
                                "paramType": "string(1)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "库存状态：\n1：合格\n2：不合格\n3：入库待验\n4：停售\n5：在库待验\n6：待处理\n7：待处理（退货）\n9：在库待验",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "actual_qty",
                                "paramType": "decimal(14.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "数量\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "stock_org_id",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "库存组织ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_lotno",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "批号\n多个批号需要分多行传\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "stock_org_name",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "库存组织名称",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_no",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "production_date",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "生产日期（批号不为空时，生产日期不能为空）\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods code",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "无ID的货主，商品编号、货主商品id传一个值即可。",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "bill_dtl_no",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "明细行号\n",
                                "example": null,
                                "children": null
                            }
                        ]
                    }
                ]
            }
        ],
        "responseParamList": [
            {
                "statusCode": "200",
                "paramName": null,
                "paramType": "成功/失败",
                "description": "",
                "children": [
                    {
                        "statusCode": null,
                        "paramName": "code",
                        "paramType": "string(10)",
                        "description": "状态码（正常：200；异常：500；token无效：2000）",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "data",
                        "paramType": "array",
                        "description": "json数据（非查询类均为空）",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "message",
                        "paramType": "string(200)",
                        "description": "描述信息",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "timestamp",
                        "paramType": "string(50)",
                        "description": "时间戳",
                        "children": null
                    }
                ]
            }
        ],
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "OMS_STPL_SAVE",
            "method": "post",
            "apiUrl": "/openapi/v2/OMS_STPL_SAVE",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"partner_id\":\"\",\"json_data\":{\"hdr\":{\"ldc_id\":\"\",\"businessbill_no\":\"\",\"operator_id\":\"\",\"con_id\":\"\",\"danjxc_side\":\"\",\"invoice_staff\":\"\",\"invoice_time\":\"\",\"remarks\":\"\"},\"dtls\":[{\"amount\":\"\",\"valid_until\":\"\",\"stock_status\":\"\",\"actual_qty\":\"\",\"stock_org_id\":\"\",\"goods_lotno\":\"\",\"stock_org_name\":\"\",\"goods_no\":\"\",\"production_date\":\"\",\"goods code\":\"\",\"bill_dtl_no\":\"\"}]}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/openapi/v2/OMS_OUTBOUNDLBX_SAVE",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "出库阿里预约单号推送",
        "serviceCode": "OMS_OUTBOUNDLBX_SAVE",
        "shareDesc": "出库阿里预约单号推送",
        "apiDocTypeId": 2,
        "description": "出库阿里预约单号推送",
        "apiDesc": "出库阿里预约单号推送",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "partner_id",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "合作伙伴编码(即顾客编码),和token一起生成",
                "example": null,
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "CKALYYDHTS",
                "paramLocation": "body",
                "isNeed": "否",
                "description": "保存内容",
                "example": null,
                "children": [
                    {
                        "paramName": "hdr",
                        "paramType": "CKALYYDHTShdr",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "汇总json组",
                        "example": null,
                        "children": [
                            {
                                "paramName": "branchId",
                                "paramType": "string(10)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "分公司标识\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "lbxNo",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "阿里入库单号（LBX单号）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "saleOrderBillId",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "业务单号\n",
                                "example": null,
                                "children": null
                            }
                        ]
                    }
                ]
            }
        ],
        "responseParamList": null,
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "OMS_OUTBOUNDLBX_SAVE",
            "method": "post",
            "apiUrl": "/openapi/v2/OMS_OUTBOUNDLBX_SAVE",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"partner_id\":\"\",\"json_data\":{\"hdr\":{\"branchId\":\"\",\"lbxNo\":\"\",\"saleOrderBillId\":\"\"}}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/openapi/v2/OMS_INBOUND_SAVE",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "入库计划推送",
        "serviceCode": "OMS_INBOUND_SAVE",
        "shareDesc": "入库计划推送",
        "apiDocTypeId": 2,
        "description": "OMS_INBOUND_SAVE",
        "apiDesc": "OMS_INBOUND_SAVE",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "partner_id",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "合作伙伴编码(即顾客编码),和token一起生成",
                "example": null,
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "入库计划推送",
                "paramLocation": "body",
                "isNeed": "否",
                "description": "保存内容",
                "example": null,
                "children": [
                    {
                        "paramName": "hdr",
                        "paramType": "hdr",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": null,
                        "example": null,
                        "children": [
                            {
                                "paramName": "ssa_no",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "客户编号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "erp_source",
                                "paramType": "string(30)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "上游系统订单来源",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "departure_address",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "启运地点",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "arrival_mode",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "到货方式\nA1：待货入库\nA2：提货入库",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "transport_time",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "启运时间",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "contact_phone",
                                "paramType": "string(80)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "个性字段：联系电话",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "purchase_area",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "个性字段：外购入库区域",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "operator_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "运营方ID\n可以不传，绑定账户",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "store_no",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主仓库编号\nerp_storeid",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "con_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主ID\n通过配置表获取ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "danjxc_side",
                                "paramType": "string(10)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "单据下传方\n外部三方：1；\n九州通内部公司：0\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "tprt_record",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "温度记录",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "invoice_time",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "开票时间",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "operate_staff",
                                "paramType": "string(60)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "个性字段：操作员",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "usage_id",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "用途id",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "storehouse_no",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "个性字段：仓库编号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "ldc_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "物流中心ID\n通过配置表获取ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "businessbill_no",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "业务单据编号 主键",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "storageaddress_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "入库地址ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "business_type",
                                "paramType": "string(10)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "入库类型\n1:正常入库 4:销售退回",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "personality_field_hdr",
                                "paramType": "string(500)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "个性字段：质检员",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "transport_mode",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "运输方式",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "con_no",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主编号\nerp_branchid",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "driver_staff",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "司机",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "contact_name",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "个性字段：联系人",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "usage_name",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "用途名称",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "borg_name",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "业务组织名称",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "vehicle_no",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "车牌号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "is_prepay",
                                "paramType": "string(2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "个性字段：是否预付款",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "ssa_code",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主客户ID\n无ID的货主，客户编号、货主客户ID传同一个值即可。",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "tprt_mode",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "温控方式",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "is_bone",
                                "paramType": "string(1)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "个性字段：是否骨科器械",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "tdeladdress_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "提货地址ID   若不传默认取委托方的默认地址",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "plan_arrival_time",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "预计到货时间",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "transport_ssa",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "运输单位",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "recorder_no",
                                "paramType": "string(60)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "记录仪型号或编号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "invoice_staff",
                                "paramType": "string(60)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "开票员",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "arrival_billno",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "到货单号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_type",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "1：西药\n2：中药(小袋)\n3：计生\n4：器械\n5：原料药\n6：第三方\n7：赠品\n10：消费品\n12：可混开\n13：中药(大袋)\n23：食品\n27：基药\n28：保健食品\n29：原料药中间体\n30：化工品",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "aging",
                                "paramType": "string(15)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "时效\n24/48/72/96/120 (小时)",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "borg_id",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "业务组织id",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "quality_inspector",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "个性字段：质检员2",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "remarks",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "备注",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "transport_staff",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "配送员",
                                "example": null,
                                "children": null
                            }
                        ]
                    },
                    {
                        "paramName": "dtls",
                        "paramType": "array[dtls]",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": null,
                        "example": null,
                        "children": [
                            {
                                "paramName": "is_ai",
                                "paramType": "string(10)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "个性字段：是否AI订单",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "sorg_name",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "库存组织名称",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "scanningbill_no",
                                "paramType": "string(14)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "个性字段：扫描单号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "amount",
                                "paramType": "decimal(22.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "金额",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "sorg_id",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "库存组织id",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_lotno",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "商品批号\n销退不允许为空",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_code",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主商品id",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_no",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "商品编号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "production_date",
                                "paramType": "date",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "生产日期\n销退不允许为空",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "audit_purchase_remark",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "采购审核意见",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "transport_tool",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "个性字段：冷藏品运输工具",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "bill_dtl_no",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "行号",
                                "example": "",
                                "children": null
                            },
                            {
                                "paramName": "outstorebill_no",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "出库单号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "rp_reasons",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "退货原因\n销退不允许为空",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Chilleddrug_Tprt",
                                "paramType": "decimal(14.2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "个性字段：冷藏品温度",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "valid_until",
                                "paramType": "date",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "有效期至\n销退不允许为空",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "actual_qty",
                                "paramType": "decimal(14.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "数量",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "price",
                                "paramType": "decimal(22.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "单价",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "acceptance_check_rlt",
                                "paramType": "string(10)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "验收评定\n1:合格 \n2:不合格 \n3:入库",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_value",
                                "paramType": "decimal(14.3)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "商品价值",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "personality_field_dtl",
                                "paramType": "string(500)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "个性字段",
                                "example": null,
                                "children": null
                            }
                        ]
                    }
                ]
            }
        ],
        "responseParamList": [
            {
                "statusCode": "200",
                "paramName": null,
                "paramType": "成功/失败",
                "description": "",
                "children": [
                    {
                        "statusCode": null,
                        "paramName": "code",
                        "paramType": "string(10)",
                        "description": "状态码（正常：200；异常：500；token无效：2000）",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "data",
                        "paramType": "array",
                        "description": "json数据（非查询类均为空）",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "message",
                        "paramType": "string(200)",
                        "description": "描述信息",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "timestamp",
                        "paramType": "string(50)",
                        "description": "时间戳",
                        "children": null
                    }
                ]
            }
        ],
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "OMS_INBOUND_SAVE",
            "method": "post",
            "apiUrl": "/openapi/v2/OMS_INBOUND_SAVE",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"partner_id\":\"\",\"json_data\":{\"hdr\":{\"ssa_no\":\"\",\"erp_source\":\"\",\"departure_address\":\"\",\"arrival_mode\":\"\",\"transport_time\":\"\",\"contact_phone\":\"\",\"purchase_area\":\"\",\"operator_id\":\"\",\"store_no\":\"\",\"con_id\":\"\",\"danjxc_side\":\"\",\"tprt_record\":\"\",\"invoice_time\":\"\",\"operate_staff\":\"\",\"usage_id\":\"\",\"storehouse_no\":\"\",\"ldc_id\":\"\",\"businessbill_no\":\"\",\"storageaddress_id\":\"\",\"business_type\":\"\",\"personality_field_hdr\":\"\",\"transport_mode\":\"\",\"con_no\":\"\",\"driver_staff\":\"\",\"contact_name\":\"\",\"usage_name\":\"\",\"borg_name\":\"\",\"vehicle_no\":\"\",\"is_prepay\":\"\",\"ssa_code\":\"\",\"tprt_mode\":\"\",\"is_bone\":\"\",\"tdeladdress_id\":\"\",\"plan_arrival_time\":\"\",\"transport_ssa\":\"\",\"recorder_no\":\"\",\"invoice_staff\":\"\",\"arrival_billno\":\"\",\"goods_type\":\"\",\"aging\":\"\",\"borg_id\":\"\",\"quality_inspector\":\"\",\"remarks\":\"\",\"transport_staff\":\"\"},\"dtls\":[{\"is_ai\":\"\",\"sorg_name\":\"\",\"scanningbill_no\":\"\",\"amount\":\"\",\"sorg_id\":\"\",\"goods_lotno\":\"\",\"goods_code\":\"\",\"goods_no\":\"\",\"production_date\":\"\",\"audit_purchase_remark\":\"\",\"transport_tool\":\"\",\"bill_dtl_no\":\"\",\"outstorebill_no\":\"\",\"rp_reasons\":\"\",\"Chilleddrug_Tprt\":\"\",\"valid_until\":\"\",\"actual_qty\":\"\",\"price\":\"\",\"acceptance_check_rlt\":\"\",\"goods_value\":\"\",\"personality_field_dtl\":\"\"}]}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/openapi/v2/OMS_INBOUNDACCOUNT_SAVE",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "入库记账推送",
        "serviceCode": "OMS_INBOUNDACCOUNT_SAVE",
        "shareDesc": "入库记账推送",
        "apiDocTypeId": 2,
        "description": "OMS_INBOUNDACCOUNT_SAVE",
        "apiDesc": "OMS_INBOUNDACCOUNT_SAVE",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "partner_id",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "合作伙伴编码(即顾客编码),和token一起生成",
                "example": null,
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "rkjz",
                "paramLocation": "body",
                "isNeed": "否",
                "description": "保存内容",
                "example": null,
                "children": [
                    {
                        "paramName": "hdr",
                        "paramType": "rkjzhdr",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "汇总json组",
                        "example": null,
                        "children": [
                            {
                                "paramName": "ish_businessbill_no",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "入库单汇总ID（LMIS的收货单号）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "ldc_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "物流中心ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "operator_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "运营方ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "con_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主ID",
                                "example": null,
                                "children": null
                            }
                        ]
                    },
                    {
                        "paramName": "dtls",
                        "paramType": "array[rkjzdtl]",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "明细json组",
                        "example": null,
                        "children": [
                            {
                                "paramName": "ish_dtl_wms",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "入库单明细ID（LMIS的收货单明细ID）\n需要有此字段，否则单品上传会有问题",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "ish_serial_number",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "进场流水号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "actual_qty",
                                "paramType": "decimal(14.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "数量（若为空给默认值0）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "bill_dtl_no",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "明细行号(采购单原始行号)",
                                "example": null,
                                "children": null
                            }
                        ]
                    }
                ]
            }
        ],
        "responseParamList": [
            {
                "statusCode": "200",
                "paramName": null,
                "paramType": "成功/失败",
                "description": "",
                "children": [
                    {
                        "statusCode": null,
                        "paramName": "code",
                        "paramType": "string(10)",
                        "description": "状态码（正常：200；异常：500；token无效：2000）",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "data",
                        "paramType": "array",
                        "description": "json数据（非查询类均为空）",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "message",
                        "paramType": "string(200)",
                        "description": "描述信息",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "timestamp",
                        "paramType": "string(50)",
                        "description": "时间戳",
                        "children": null
                    }
                ]
            }
        ],
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "OMS_INBOUNDACCOUNT_SAVE",
            "method": "post",
            "apiUrl": "/openapi/v2/OMS_INBOUNDACCOUNT_SAVE",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"partner_id\":\"\",\"json_data\":{\"hdr\":{\"ish_businessbill_no\":\"\",\"ldc_id\":\"\",\"operator_id\":\"\",\"con_id\":\"\"},\"dtls\":[{\"ish_dtl_wms\":\"\",\"ish_serial_number\":\"\",\"actual_qty\":\"\",\"bill_dtl_no\":\"\"}]}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/api-general/v1/TMS_LOGISTICSNODE_SAVE",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "物流节点推送",
        "serviceCode": "TMS_LOGISTICSNODE_SAVE",
        "shareDesc": "物流节点推送",
        "apiDocTypeId": 9,
        "description": "物流节点推送",
        "apiDesc": "物流节点推送",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "TMS_LOGISTICSNODE_SAVE",
                "paramType": "TMS_LOGISTICSNODE_SAVE1",
                "paramLocation": "body",
                "isNeed": "否",
                "description": "物流节点推送",
                "example": null,
                "children": [
                    {
                        "paramName": "func_type",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "保存",
                        "example": "saveData",
                        "children": null
                    },
                    {
                        "paramName": "json_data",
                        "paramType": "TMS_LOGISTICSNODE_SAVE",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "字段内容",
                        "example": null,
                        "children": [
                            {
                                "paramName": "Ldc_Id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "物流中心ID",
                                "example": "690251255778594",
                                "children": null
                            },
                            {
                                "paramName": "carrier_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "承运商ID",
                                "example": "744210390135842",
                                "children": null
                            },
                            {
                                "paramName": "logistic_state",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "物流状态（80 运输中 ；ZZ 已签收 ）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "businessbill_no",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "业务单号",
                                "example": "WUHDCP0060529778",
                                "children": null
                            },
                            {
                                "paramName": "billtransport_no",
                                "paramType": "string(10)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "物流单号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "Operator_Id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "运营商ID",
                                "example": "174660684877367",
                                "children": null
                            },
                            {
                                "paramName": "Con_Id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "operate_staff",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "操作人",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "operate_position",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "操作人位置",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "logistic_desc",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "物流状态描述",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "operate_time",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "操作时间",
                                "example": null,
                                "children": null
                            }
                        ]
                    }
                ]
            }
        ],
        "responseParamList": null,
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "TMS_LOGISTICSNODE_SAVE",
            "method": "post",
            "apiUrl": "/api-general/v1/TMS_LOGISTICSNODE_SAVE",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"func_type\":\"saveData\",\"json_data\":{\"Ldc_Id\":\"690251255778594\",\"carrier_id\":\"744210390135842\",\"logistic_state\":\"\",\"businessbill_no\":\"WUHDCP0060529778\",\"billtransport_no\":\"\",\"Operator_Id\":\"174660684877367\",\"Con_Id\":\"\",\"operate_staff\":\"\",\"operate_position\":\"\",\"logistic_desc\":\"\",\"operate_time\":\"\"}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/openapi//v2/OMS_INBOUNDCANCEL_SAVE",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "入库计划取消推送",
        "serviceCode": "OMS_INBOUNDCANCEL_SAVE",
        "shareDesc": "入库计划取消推送",
        "apiDocTypeId": 2,
        "description": "PUSH_OMS_INBOUND_CONFIRMATION",
        "apiDesc": "PUSH_OMS_INBOUND_CONFIRMATION",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "partner_id",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "合作伙伴编码(即顾客编码),和token一起生成",
                "example": null,
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "rkjhqxts",
                "paramLocation": "body",
                "isNeed": "否",
                "description": "保存内容",
                "example": null,
                "children": [
                    {
                        "paramName": "hdr",
                        "paramType": "rkjhqxtshdr",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "汇总json组",
                        "example": null,
                        "children": [
                            {
                                "paramName": "ldc_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "物流中心ID",
                                "example": "30732f43675de81180bf008cfaedcb35",
                                "children": null
                            },
                            {
                                "paramName": "businessbill_no",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "业务单号",
                                "example": "yp8518430163",
                                "children": null
                            },
                            {
                                "paramName": "operator_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "运营方ID",
                                "example": "832382879601376",
                                "children": null
                            },
                            {
                                "paramName": "con_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主ID",
                                "example": "e961820a7291e911b84182620d55eb2d",
                                "children": null
                            },
                            {
                                "paramName": "business_type",
                                "paramType": "string(10)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "业务类型（1:正常入库4:销售退回）",
                                "example": "1",
                                "children": null
                            },
                            {
                                "paramName": "cancel_reasons",
                                "paramType": "string(400)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "取消原因",
                                "example": "取消",
                                "children": null
                            }
                        ]
                    }
                ]
            }
        ],
        "responseParamList": [
            {
                "statusCode": "200",
                "paramName": null,
                "paramType": "成功/失败",
                "description": "",
                "children": [
                    {
                        "statusCode": null,
                        "paramName": "code",
                        "paramType": "string(10)",
                        "description": "状态码（正常：200；异常：500；token无效：2000）",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "data",
                        "paramType": "array",
                        "description": "json数据（非查询类均为空）",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "message",
                        "paramType": "string(200)",
                        "description": "描述信息",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "timestamp",
                        "paramType": "string(50)",
                        "description": "时间戳",
                        "children": null
                    }
                ]
            }
        ],
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "OMS_INBOUNDCANCEL_SAVE",
            "method": "post",
            "apiUrl": "/openapi//v2/OMS_INBOUNDCANCEL_SAVE",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"partner_id\":\"\",\"json_data\":{\"hdr\":{\"ldc_id\":\"30732f43675de81180bf008cfaedcb35\",\"businessbill_no\":\"yp8518430163\",\"operator_id\":\"832382879601376\",\"con_id\":\"e961820a7291e911b84182620d55eb2d\",\"business_type\":\"1\",\"cancel_reasons\":\"取消\"}}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/api-general/v1/TMS_JOIN_CARRIER_SAVE",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "承运商物流单号推送",
        "serviceCode": "TMS_JOIN_CARRIER_SAVE",
        "shareDesc": "承运商物流单号推送",
        "apiDocTypeId": 9,
        "description": "承运商物流单号推送",
        "apiDesc": "承运商物流单号推送",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "TMS_JOIN_CARRIER_SAVE",
                "paramType": "TMS_JOIN_CARRIER_SAVE",
                "paramLocation": "body",
                "isNeed": "否",
                "description": "承运商物流单号推送",
                "example": null,
                "children": [
                    {
                        "paramName": "func_type",
                        "paramType": "string",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "保存",
                        "example": "saveData",
                        "children": null
                    },
                    {
                        "paramName": "json_data",
                        "paramType": "array[TMS_JOIN_CARRIER_SAVE1]",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "保存内容",
                        "example": null,
                        "children": [
                            {
                                "paramName": "carrier_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "承运商id",
                                "example": "744210390135842",
                                "children": null
                            },
                            {
                                "paramName": "volume",
                                "paramType": "decimal(14.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "体积",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "ldc_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "物流中心id",
                                "example": "690251255778594",
                                "children": null
                            },
                            {
                                "paramName": "businessbill_no",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "客户订单号",
                                "example": "WUHDCP0060529778",
                                "children": null
                            },
                            {
                                "paramName": "operator_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "运营商id",
                                "example": "174660684877367",
                                "children": null
                            },
                            {
                                "paramName": "way_bill_no",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "运单号（TMS单号）",
                                "example": "250021418",
                                "children": null
                            },
                            {
                                "paramName": "weight",
                                "paramType": "decimal(14.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "重量",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "actual_pcs",
                                "paramType": "decimal(14.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "总件数",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "special_service",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "增值服务",
                                "example": null,
                                "children": null
                            }
                        ]
                    }
                ]
            }
        ],
        "responseParamList": null,
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "TMS_JOIN_CARRIER_SAVE",
            "method": "post",
            "apiUrl": "/api-general/v1/TMS_JOIN_CARRIER_SAVE",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"func_type\":\"saveData\",\"json_data\":[{\"carrier_id\":\"744210390135842\",\"volume\":\"\",\"ldc_id\":\"690251255778594\",\"businessbill_no\":\"WUHDCP0060529778\",\"operator_id\":\"174660684877367\",\"way_bill_no\":\"250021418\",\"weight\":\"\",\"actual_pcs\":\"\",\"special_service\":\"\"}]}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/openapi/v2/OMS_STOCKSTATUSTRANS_SAVE",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "库存状态变化申请推送",
        "serviceCode": "OMS_STOCKSTATUSTRANS_SAVE",
        "shareDesc": "库存状态变化申请推送",
        "apiDocTypeId": 2,
        "description": "库存状态变化申请推送",
        "apiDesc": "库存状态变化申请推送",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "partner_id",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "合作伙伴编码(即顾客编码),和token一起生成",
                "example": null,
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "KCZTBHSQTS",
                "paramLocation": "body",
                "isNeed": "否",
                "description": "保存内容",
                "example": null,
                "children": [
                    {
                        "paramName": "hdr",
                        "paramType": "KCZTBHSQTShdr",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "汇总json组",
                        "example": null,
                        "children": [
                            {
                                "paramName": "ldc_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "物流中心ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "businessbill_no",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主业务单号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "operator_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "运营方ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "con_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "danjxc_side",
                                "paramType": "string(10)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "单据下传方",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "invoice_staff",
                                "paramType": "string(60)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "制单员",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "invoice_time",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "制单时间",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "remarks",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "备注",
                                "example": null,
                                "children": null
                            }
                        ]
                    },
                    {
                        "paramName": "dtls",
                        "paramType": "array[KCZTBHSQTSdtl]",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "明细json组",
                        "example": null,
                        "children": [
                            {
                                "paramName": "ish_businessbill_no",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "LMIS入库单号（采购入库回传的InstoreBill_No_LMIS\n必填，唯一性校验使用）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_lotno",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "批号（多个批号需要分多行传）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "stock_org_name",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "库存组织名称",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_code",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主商品id（无ID的货主，商品编号、货主商品ID传同一个值即可）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_no",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "production_date",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "生产日期（批号不为空时，生产日期不能为空）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "stock_status_new",
                                "paramType": "string(1)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "目的库存状态（1 合格\n2 不合格\n3 入库待验\n4 停售\n5 在库待验\n6 待处理\n7 待处理（退货）\n9 虚拟库存）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "image_address",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "图片地址（多个图片拼接显示）\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "bill_dtl_no",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "明细行号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "ish_dtl_wms",
                                "paramType": "integer",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "LMIS入库行号（采购入库回传的Bill_Dtl_Id\n必填，唯一性校验使用）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "valid_until",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "有效期（批号不为空时，有效期不能为空）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "actual_qty",
                                "paramType": "decimal(14.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "数量",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "stock_org_id",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "库存组织ID\n\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "trans_reason",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "库存状态原因",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "stock_status_old",
                                "paramType": "string(1)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "原库存状态（1 合格\n2 不合格\n3 入库待验\n4 停售\n5 在库待验\n6 待处理\n7 待处理（退货）\n9 虚拟库存）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "handling_opinion",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "处理意见（同意转合格）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "stock_status_trans_type",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "库存状态变化类型（1:合格转待处理\n2:合格转停售\n3:待处理转合格\n4:待处理转停售\n5:停售转合格\n6:待处理转不合格\n7:停售转不合格）",
                                "example": null,
                                "children": null
                            }
                        ]
                    }
                ]
            }
        ],
        "responseParamList": [
            {
                "statusCode": "200",
                "paramName": null,
                "paramType": "成功/失败",
                "description": "",
                "children": [
                    {
                        "statusCode": null,
                        "paramName": "code",
                        "paramType": "string(10)",
                        "description": "状态码（正常：200；异常：500；token无效：2000）",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "data",
                        "paramType": "array",
                        "description": "json数据（非查询类均为空）",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "message",
                        "paramType": "string(200)",
                        "description": "描述信息",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "timestamp",
                        "paramType": "string(50)",
                        "description": "时间戳",
                        "children": null
                    }
                ]
            }
        ],
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "OMS_STOCKSTATUSTRANS_SAVE",
            "method": "post",
            "apiUrl": "/openapi/v2/OMS_STOCKSTATUSTRANS_SAVE",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"partner_id\":\"\",\"json_data\":{\"hdr\":{\"ldc_id\":\"\",\"businessbill_no\":\"\",\"operator_id\":\"\",\"con_id\":\"\",\"danjxc_side\":\"\",\"invoice_staff\":\"\",\"invoice_time\":\"\",\"remarks\":\"\"},\"dtls\":[{\"ish_businessbill_no\":\"\",\"goods_lotno\":\"\",\"stock_org_name\":\"\",\"goods_code\":\"\",\"goods_no\":\"\",\"production_date\":\"\",\"stock_status_new\":\"\",\"image_address\":\"\",\"bill_dtl_no\":\"\",\"ish_dtl_wms\":\"\",\"valid_until\":\"\",\"actual_qty\":\"\",\"stock_org_id\":\"\",\"trans_reason\":\"\",\"stock_status_old\":\"\",\"handling_opinion\":\"\",\"stock_status_trans_type\":\"\"}]}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/node/v1/findExpressNodes",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "物流节点推送（委托方版）",
        "serviceCode": "findExpressNodes",
        "shareDesc": "物流节点推送（委托方版）",
        "apiDocTypeId": 13,
        "description": "物流节点推送（委托方版）",
        "apiDesc": "物流节点推送（委托方版）",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "json_data",
                "paramType": "wltsjdr",
                "paramLocation": "body",
                "isNeed": "否",
                "description": null,
                "example": null,
                "children": [
                    {
                        "paramName": "businessbill_no",
                        "paramType": "string(50)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "客户业务单号",
                        "example": null,
                        "children": null
                    },
                    {
                        "paramName": "con_id",
                        "paramType": "string(32)",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "委托方id",
                        "example": null,
                        "children": null
                    }
                ]
            }
        ],
        "responseParamList": [
            {
                "statusCode": "200",
                "paramName": null,
                "paramType": "wlstjdkdc",
                "description": "",
                "children": [
                    {
                        "statusCode": null,
                        "paramName": "sender_address",
                        "paramType": "string(500)",
                        "description": "起点",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "joincloud_bill_no",
                        "paramType": "string",
                        "description": "运单号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "transport_time",
                        "paramType": "string",
                        "description": "节点时间（例：2023-12-21 11:10:20）",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "businessbill_no",
                        "paramType": "string(50)",
                        "description": "客户业务单号",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "con_id",
                        "paramType": "string(32)",
                        "description": "委托方id",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "latitude",
                        "paramType": "string",
                        "description": "维度",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "receiver_address",
                        "paramType": "string(500)",
                        "description": "终点",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "express_state_desc",
                        "paramType": "string",
                        "description": "物流节点（例：出库完成）",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "remarks",
                        "paramType": "string",
                        "description": "例：仓库已完成打包待运输配送",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "transport_create_time",
                        "paramType": "string",
                        "description": "创建时间",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "longitude",
                        "paramType": "string",
                        "description": "经度",
                        "children": null
                    }
                ]
            }
        ],
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "findExpressNodes",
            "method": "post",
            "apiUrl": "/node/v1/findExpressNodes",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"businessbill_no\":\"\",\"con_id\":\"\"}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/openapi/v2/IN_CONSIGNMENT",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "寄售临调销退推送",
        "serviceCode": "IN_CONSIGNMENT",
        "shareDesc": "寄售临调销退推送",
        "apiDocTypeId": 2,
        "description": "寄售临调销退推送",
        "apiDesc": "寄售临调销退推送",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "partner_id",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "合作伙伴编码(即顾客编码),和token一起生成",
                "example": null,
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "寄售临调销退下传",
                "paramLocation": "body",
                "isNeed": "否",
                "description": null,
                "example": null,
                "children": [
                    {
                        "paramName": "hdr",
                        "paramType": "寄售临调销退下传hdr",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "汇总json组",
                        "example": null,
                        "children": [
                            {
                                "paramName": "contact_name",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "联系人\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "arrival_mode",
                                "paramType": "string(10)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "到货方式\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "operator_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "运营方ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "con_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主ID\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "ssa_code",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "单位内码\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "danjxc_side",
                                "paramType": "string(10)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "单据下传方\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "instore_type",
                                "paramType": "string(2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "入库类型\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "invoice_time",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "制单时间",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "erp_branchid",
                                "paramType": "string(30)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": " 上游系统分公司标识ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "store_no string",
                                "paramType": "string(20)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主仓库编号 ",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "ldc_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "物流中心ID\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "businessbill_no",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "单据编号\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "storageaddress_id",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "入库地址ID\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "business_type",
                                "paramType": "string(2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "业务类型\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "invoice_staff",
                                "paramType": "string(60)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "开票员\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_type",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "商品类型\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "aging",
                                "paramType": "string(2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "时效\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "quality_inspector",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "质检员\n",
                                "example": null,
                                "children": null
                            }
                        ]
                    },
                    {
                        "paramName": "dtls",
                        "paramType": "array[寄售临调销退下传dtls]",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "明细json组",
                        "example": null,
                        "children": [
                            {
                                "paramName": "sorg_name",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "库存组织名称",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "amount",
                                "paramType": "decimal(22.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "金额\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "sorg_id",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "库存组织id",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_lotno",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "商品批号 销退不允许为空\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_code",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主商品id",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "production_date",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "生产日期\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "bill_dtl_no",
                                "paramType": "string",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "行号\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "rp_reasons",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "原因\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "valid_until",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "有效期\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "actual_qty",
                                "paramType": "decimal(14.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "数量\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "price",
                                "paramType": "decimal(22.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "单价\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "acceptance_check_rlt",
                                "paramType": "string(10)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "验收评定 1:合格 2:不合格 3:入库\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_value",
                                "paramType": "decimal(14.3)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "商品价值\n",
                                "example": null,
                                "children": null
                            }
                        ]
                    }
                ]
            }
        ],
        "responseParamList": null,
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "IN_CONSIGNMENT",
            "method": "post",
            "apiUrl": "/openapi/v2/IN_CONSIGNMENT",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"partner_id\":\"\",\"json_data\":{\"hdr\":{\"contact_name\":\"\",\"arrival_mode\":\"\",\"operator_id\":\"\",\"con_id\":\"\",\"ssa_code\":\"\",\"danjxc_side\":\"\",\"instore_type\":\"\",\"invoice_time\":\"\",\"erp_branchid\":\"\",\"store_no string\":\"\",\"ldc_id\":\"\",\"businessbill_no\":\"\",\"storageaddress_id\":\"\",\"business_type\":\"\",\"invoice_staff\":\"\",\"goods_type\":\"\",\"aging\":\"\",\"quality_inspector\":\"\"},\"dtls\":[{\"sorg_name\":\"\",\"amount\":\"\",\"sorg_id\":\"\",\"goods_lotno\":\"\",\"goods_code\":\"\",\"production_date\":\"\",\"bill_dtl_no\":\"\",\"rp_reasons\":\"\",\"valid_until\":\"\",\"actual_qty\":\"\",\"price\":\"\",\"acceptance_check_rlt\":\"\",\"goods_value\":\"\"}]}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/openapi/v2/OMS_MOVEHOUSE_SAVE",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "仓间调拨计划推送",
        "serviceCode": "OMS_MOVEHOUSE_SAVE",
        "shareDesc": "仓间调拨计划推送",
        "apiDocTypeId": 2,
        "description": "仓间调拨计划推送",
        "apiDesc": "仓间调拨计划推送",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "partner_id",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "合作伙伴编码(即顾客编码),和token一起生成",
                "example": null,
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "CJDBJHTS",
                "paramLocation": "body",
                "isNeed": "否",
                "description": "保存内容",
                "example": null,
                "children": [
                    {
                        "paramName": "hdr",
                        "paramType": "CJDBJHTShdr",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "汇总json组",
                        "example": null,
                        "children": [
                            {
                                "paramName": "usage_name",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "用途名称",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "transport_goodsmode",
                                "paramType": "string(2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "运输模式（00：不确定\n01：自配\n02：托运\n03：快递\n04：自提\n05：干支线）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "borg_name",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "业务组织名称",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "operator_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "运营方ID（可以不传，绑定账户）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "con_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "danjxc_side",
                                "paramType": "string(10)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "单据下传方（1：外部三方\n0：九州通内部公司）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "invoice_time",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "制单时间",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "ldc_id_t",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "调入仓ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "usage_id",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "用途id",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "businessbill_no",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "业务单号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "invoice_staff",
                                "paramType": "string(60)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "制单员（传中文名称）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "aging",
                                "paramType": "string(2)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "时效类型（01：配中\n02：当日达\n03：次日达）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "borg_id",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "业务组织id",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "remarks",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "备注",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "ldc_id_f",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "调出仓ID",
                                "example": null,
                                "children": null
                            }
                        ]
                    },
                    {
                        "paramName": "dtls",
                        "paramType": "array[CJDBJHTSdtl]",
                        "paramLocation": null,
                        "isNeed": "否",
                        "description": "明细json组\n",
                        "example": null,
                        "children": [
                            {
                                "paramName": "sorg_name",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "库存组织名称",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "amount",
                                "paramType": "decimal(22.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "金额",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "valid_until",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "有效期（批号不为空时，有效期不能为空）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "actual_qty",
                                "paramType": "decimal(14.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "数量",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "sorg_id",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "库存组织id",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_lotno",
                                "paramType": "string(200)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "批号（销售类型=购进退出时，需传输此字段，出库订单可传可不传）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_code",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主商品id（无ID的货主，商品编号、货主商品ID传同一个值即可。）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "price",
                                "paramType": "decimal(22.5)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "单价",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "goods_no",
                                "paramType": "string(50)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "商品编号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "production_date",
                                "paramType": "dateTime",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "生产日期（批号不为空时，生产日期不能为空）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "bill_dtl_no",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "明细行号",
                                "example": null,
                                "children": null
                            }
                        ]
                    }
                ]
            }
        ],
        "responseParamList": null,
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "OMS_MOVEHOUSE_SAVE",
            "method": "post",
            "apiUrl": "/openapi/v2/OMS_MOVEHOUSE_SAVE",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"partner_id\":\"\",\"json_data\":{\"hdr\":{\"usage_name\":\"\",\"transport_goodsmode\":\"\",\"borg_name\":\"\",\"operator_id\":\"\",\"con_id\":\"\",\"danjxc_side\":\"\",\"invoice_time\":\"\",\"ldc_id_t\":\"\",\"usage_id\":\"\",\"businessbill_no\":\"\",\"invoice_staff\":\"\",\"aging\":\"\",\"borg_id\":\"\",\"remarks\":\"\",\"ldc_id_f\":\"\"},\"dtls\":[{\"sorg_name\":\"\",\"amount\":\"\",\"valid_until\":\"\",\"actual_qty\":\"\",\"sorg_id\":\"\",\"goods_lotno\":\"\",\"goods_code\":\"\",\"price\":\"\",\"goods_no\":\"\",\"production_date\":\"\",\"bill_dtl_no\":\"\"}]}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    },
    {
        "url": "/openapi/v2/OMS_OUTBOUNDCANCEL_SAVE",
        "prefixUrl": "https://api.56jzt.com/gateway",
        "name": "出库计划取消推送",
        "serviceCode": "OMS_OUTBOUNDCANCEL_SAVE",
        "shareDesc": "出库计划取消推送",
        "apiDocTypeId": 2,
        "description": "出库计划取消推送",
        "apiDesc": "出库计划取消推送",
        "method": "post",
        "contentType": "application/json",
        "requestParamList": [
            {
                "paramName": "partner_id",
                "paramType": "string",
                "paramLocation": "body",
                "isNeed": "是",
                "description": "合作伙伴编码(即顾客编码),和token一起生成",
                "example": null,
                "children": null
            },
            {
                "paramName": "json_data",
                "paramType": "ckjhqxts",
                "paramLocation": "body",
                "isNeed": "否",
                "description": "保存内容",
                "example": null,
                "children": [
                    {
                        "paramName": "hdr",
                        "paramType": "ckjhqxtHDR",
                        "paramLocation": null,
                        "isNeed": "是",
                        "description": "汇总json组",
                        "example": null,
                        "children": [
                            {
                                "paramName": "erp_source",
                                "paramType": "string(30)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "上游系统订单来源（jzzc、流通ERP等值）",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "ldc_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "物流中心ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "businessbill_no",
                                "paramType": "string(100)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "业务单号",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "operator_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "运营方ID",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "con_id",
                                "paramType": "string(32)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "货主ID\n",
                                "example": null,
                                "children": null
                            },
                            {
                                "paramName": "cancel_reasons",
                                "paramType": "string(400)",
                                "paramLocation": null,
                                "isNeed": null,
                                "description": "取消原因",
                                "example": null,
                                "children": null
                            }
                        ]
                    }
                ]
            }
        ],
        "responseParamList": [
            {
                "statusCode": "200",
                "paramName": null,
                "paramType": "成功/失败",
                "description": "",
                "children": [
                    {
                        "statusCode": null,
                        "paramName": "code",
                        "paramType": "string(10)",
                        "description": "状态码（正常：200；异常：500；token无效：2000）",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "data",
                        "paramType": "array",
                        "description": "json数据（非查询类均为空）",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "message",
                        "paramType": "string(200)",
                        "description": "描述信息",
                        "children": null
                    },
                    {
                        "statusCode": null,
                        "paramName": "timestamp",
                        "paramType": "string(50)",
                        "description": "时间戳",
                        "children": null
                    }
                ]
            }
        ],
        "apiRequestParam": {
            "id": null,
            "docId": null,
            "apiCode": "OMS_OUTBOUNDCANCEL_SAVE",
            "method": "post",
            "apiUrl": "/openapi/v2/OMS_OUTBOUNDCANCEL_SAVE",
            "urlParam": null,
            "formData": null,
            "formEncodeParam": null,
            "bodyData": "{\"partner_id\":\"\",\"json_data\":{\"hdr\":{\"erp_source\":\"\",\"ldc_id\":\"\",\"businessbill_no\":\"\",\"operator_id\":\"\",\"con_id\":\"\",\"cancel_reasons\":\"\"}}}",
            "headerData": null,
            "cookieData": null,
            "responseData": null,
            "contentType": "application/json",
            "createTime": null,
            "updateTime": null,
            "createdStaff": null,
            "updateStaff": null,
            "isDelete": null,
            "paramType": "raw",
            "paramCategory": "body"
        }
    }
]