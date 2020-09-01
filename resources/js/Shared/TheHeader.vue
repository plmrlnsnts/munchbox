<template>
    <header class="h-16 border-b flex items-center px-4">
        <div class="flex-shrink-0">
            <PortalTarget name="header-left">
                <a href="">
                    <img class="w-8 h-8 rounded-full object-cover shadow-xs" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                </a>
            </PortalTarget>
        </div>
        <div class="flex-1 px-4">
            <PortalTarget name="header-center">
                <InertiaLink :href="$route('home')">
                    <img class="h-5 w-full" src="/logo.svg" alt="Munchbox">
                </InertiaLink>
            </PortalTarget>
        </div>
        <div class="flex-shrink-0">
            <PortalTarget name="header-right" />
        </div>
    </header>
</template>
