<?
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
$this->createFrame()->begin("Загрузка навигации");
?>

<?if($arResult["NavPageCount"] > 1):?>
    <?if ($arResult["NavPageNum"]+1 <= $arResult["nEndPage"]):?>
        <?
        $plus = $arResult["NavPageNum"]+1;
        $url = $arResult["sUrlPathParams"] . "PAGEN_".$arResult["NavNum"]."=".$plus;

        ?>
        <div class="load_more" data-url="<?=$url?>">
            Show more
        </div>
    <?endif?>
<?endif?>