<?
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
$this->createFrame()->begin("�������� ���������");
?>

<?if($arResult["NavPageCount"] > 1):?>

    <?if ($arResult["NavPageNomer"]+10 <= $arResult["nEndPage"]):?>
        <?
        $plus = $arResult["NavPageNomer"]+10;
        $url = $arResult["sUrlPathParams"] . "PAGEN_".$arResult["NavNum"]."=".$plus;

        ?>

        <div class="load_more" data-url="<?=$url?>">
            �������� ���
        </div>

    <?else:?>

        <div class="load_more">
            ��������� ���
        </div>

    <?endif?>

<?endif?>