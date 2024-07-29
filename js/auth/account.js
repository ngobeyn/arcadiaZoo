document.addEventListener('DOMContentLoaded', (event) => {
    const triggerTabList = document.querySelectorAll('#adminTab button')
    triggerTabList.forEach(triggerEl => {
      const tabTrigger = new bootstrap.Tab(triggerEl)

      triggerEl.addEventListener('click', event => {
        event.preventDefault()
        tabTrigger.show()
      })
    })

    // Activate the Dashboard tab
    const dashboardTriggerEl = document.querySelector('#adminTab button[data-bs-target="#dashboard"]')
    bootstrap.Tab.getInstance(dashboardTriggerEl).show()

    // Activate the CR tab
    const crTriggerEl = document.querySelector('#adminTab button[data-bs-target="#cr"]')
    bootstrap.Tab.getInstance(crTriggerEl).show()

    // Activate the Services tab
    const servicesTriggerEl = document.querySelector('#adminTab button[data-bs-target="#services"]')
    bootstrap.Tab.getInstance(servicesTriggerEl).show()

    // Activate the Habitats tab
    const servicesTriggerEl = document.querySelector('#adminTab button[data-bs-target="#habitats"]')
    bootstrap.Tab.getInstance(servicesTriggerEl).show()

    // Activate the GestionUser tab
    const servicesTriggerEl = document.querySelector('#adminTab button[data-bs-target="#gestionUser"]')
    bootstrap.Tab.getInstance(servicesTriggerEl).show()
  })