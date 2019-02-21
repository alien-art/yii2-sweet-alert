<?php
namespace alien\sweetalert;

use yii\web\AssetBundle;

class BaseSweetAlertAsset extends AssetBundle
{
    public $sourcePath = '@bower/sweetalert2/dist';
    public $css = [
        'sweetalert2.css',
    ];
    public $js = [
        'sweetalert2.min.js'
    ];
}