<template>
    <div class="footer p-r">
        <div class="container">
            <div class="footer__wrap">
                <div class="footer__contacts">
                    <h4 class="footer__title">
                        Контакты
                    </h4>
                    <p class="footer__content">
                        <a href="">Viber</a>, &nbsp;
                        <a href=""> WhatsApp </a>, телефон:
                    </p>
                    <a href="tel:+7(902)7928800" class="footer__text footer__text--tel">
                        +7 (902) 792 88 00
                    </a>
                </div>
                <div class="footer__contacts">
                    <h4 class="footer__title">
                        График работы
                    </h4>
                    <p class="footer__content">
                        Пн-Пт: с 9-00 до 18-00
                    </p>
                    <p class="footer__text">
                        Сб, Вс: выходной
                    </p>
                </div>
                <div class="footer__copyright">
                    © {{ year }} Фотостудия «Смайлик»
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            year: new Date().getFullYear()
        }
    },
}
</script>