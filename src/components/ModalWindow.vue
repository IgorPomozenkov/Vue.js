<template>
    <div :class="[$style.wrapper]">
        <ul :class="[$style.contextMenu]">
            <li>Редактировать</li>
            <li>Удалить</li>
        </ul>
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
    top: 26px;
    right: 0;
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
    background: silver;
    z-index: 1;
}

.contextMenu {
    list-style-type: none;
}

.contextMenu li {
    margin-bottom: 7px;
    cursor: pointer;
}

.contextMenu li:hover {
    text-decoration: underline;
}
</style>