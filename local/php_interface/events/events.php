<?php

AddEventHandler("iblock", "OnBeforeIBlockElementDelete", Array("TestTask", "OnBeforeIBlockElementDeleteHandler"));

class TestTask {
    function OnBeforeIBlockElementDeleteHandler($ID) {
        $arSelect = array("IBLOCK_ID", "ID", "RATING_TOTAL_VOTES");
        $arFilter = array("IBLOCK_ID" => 2);
        $res = CIBlockElement::GetList(array(), $arFilter, false, false, $arSelect);
        $votes = [];
        while ($arItem = $res->Fetch()) {
            $votes[] = $arItem["RATING_TOTAL_VOTES"];
            if($arItem["ID"] = $ID && $arItem["RATING_TOTAL_VOTES"] == max($votes)) {
                global $APPLICATION;
                $APPLICATION->throwException("Элемент имеет наибольшее количество голосов!");
                if(\Bitrix\Main\Loader::includeModule("main")) {
                    $rsAdmin = CUser::GetList("ID", "ASC", array("GROUPS_ID" => 1));
                    while ($admin = $rsAdmin->Fetch()) {
                        CEvent::Send(
                            "MAX_VOTED_ELEMENT_DELETE",
                            "s1",
                            array(
                                "EMAIL_TO" => $admin["EMAIL"]
                            ),
                        );
                    }
                }
            }
        }

    }
}