<template>
    <div :class="[$style.wrapper]">
        <v-list>
            <v-list-item-group color="primary">
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>Редактировать</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>Удалить</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </div>
</template>

<script>
export default {
    name: 'ModalWindow',
}
</script>

<style lang="scss" module>
.wrapper {
    position: absolute;
    top: 40px;
    right: 17px;
    z-index: 1;
    box-shadow: 0px 3px 15px 1px rgb(0 0 0 / 20%);
}
</style>