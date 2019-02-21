# yii2-sweet-alert

Подключение SweetAlert к проекту Yii2 и замена стандартных диалогов JS

Установка
------------

Предпочтительно устанавливать через [composer](http://getcomposer.org/download/).

Выедите в командной строке

```
php composer.phar require --prefer-dist alien/yii2-sweet-alert "*"
```

или добавьте

```
"alien/yii2-sweet-alert": "*"
```

в секцию require  вашего `composer.json` файла.

Подключаем в глобальный asset приложения или шаблон приложения 
`BaseSweetAlertAsset` для стандартного использования SweetAlert
`OverrideSweetAlertAsset` для стандартного использования SweetAlert с заменой стандратных JS диалогов
