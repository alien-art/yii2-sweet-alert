<?php
namespace alien\sweetalert;

use yii\web\AssetBundle;

class OverrideSweetAlertAsset extends AssetBundle
{
    public $sourcePath = '@alien/sweetalert/assets';
    public $js = [
        'js/yii.confirm.overrides.js'
    ];

    public $depends = [
        'alien\sweetalert\BaseSweetAlertAsset',
        ];
}