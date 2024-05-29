<template>
  <div class="layout-links">
    <nuxt-link to="/" exactActiveClass="active">
      <AppButton label="Главная" class="link" />
    </nuxt-link>
    <nuxt-link to="/settings" exactActiveClass="active">
      <AppButton label="Настройки" class="link" />
    </nuxt-link>
  </div>
</template>

<style scoped>
.link {
  background-color: var(--primary);
  color: white;
  margin-right: 10px;
}

.active .link {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transform: translateY(-5px);
}

.layout-links {
  display: flex;
  justify-content: center;
  padding: 10px;
}
</style>
