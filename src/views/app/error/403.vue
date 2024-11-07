<script setup>
import Error from "@/components/Error/Error.vue";
import { usePermissionStore } from "@/store/modules/permission";
import { useRouter } from "vue-router";

const { push } = useRouter();

const permissionStore = usePermissionStore();

const errorClick = () => {
  push(permissionStore.addRouters[0]?.path || "");
};
</script>

<template>
  <Error type="403" @error-click="errorClick" />
</template>
