<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);
?>
<div class="news-list">
    <?foreach($arResult["ITEMS"] as $arItem):?>
        <?
        $this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
        $this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
        ?>
        <div class="news-item" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
            <img src="<?=$arItem["PREVIEW_PICTURE"]["SRC"]?>" alt="<?=$arItem["NAME"]?>">
            <p><?=$arItem["PREVIEW_TEXT"]?></p>
            <h3><?=$arItem["NAME"]?></h3>

            <?if($arParams["USE_RATING"]=="Y"):?>
                <div class="col-xs-7 text-right">
                    <?$APPLICATION->IncludeComponent("bitrix:rating.vote","standart_text",
                        Array(
                            "ENTITY_TYPE_ID" => "IBLOCK_ELEMENT",
                            "ENTITY_ID" => $arItem["ID"],
                        ),
                        null,
                        array("HIDE_ICONS" => "Y")
                    );?>
                </div>
            <?endif?>
        </div>

    <?endforeach;?>
</div>
<?=$arResult["NAV_STRING"]?>

