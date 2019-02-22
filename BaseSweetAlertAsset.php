<?php
namespace alien\sweetalert;

use yii\web\AssetBundle;

class BaseSweetAlertAsset extends AssetBundle
{
    public $sourcePath = '@npm/sweetalert2/dist';
    public $css = [
        'sweetalert2.css',
    ];
    public $js = [
        'sweetalert2.min.js'
    ];
}