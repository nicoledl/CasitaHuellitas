import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from 'react-pro-sidebar'
import { Link } from 'react-router-dom'
import { FaAngleRight, FaAngleLeft, FaDog, FaPeopleCarry, FaEnvelope, FaRegCalendarAlt, FaMinus, FaHome } from 'react-icons/fa'
import Logout from '../sesion/Logout'

export const SideNav = () => {
  const { collapsed } = useProSidebar()
  const { collapseSidebar } = useProSidebar()
  const menuItemStyles = {
    root: {
      fontSize: '13px',
      fontWeight: 400
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined
    })
  }

  const contenidoGeneral = [
    {
      id: 'item-menu',
      component: <Link to='/administracion' />,
      content: collapsed ? <FaHome size={25} /> : <p>Inicio</p>
    },
    {
      id: 'item-menu',
      label: collapsed ? <FaDog size={25} /> : <p>Mascotas</p>,
      submenu: [
        {
          className: 'menuitem',
          component: <Link to='/mascotas' />,
          content: 'Lista de Mascotas',
          id: 'listaDeMascotas'
        },
        {
          className: 'menuitem',
          component: <Link to='/adoptados' />,
          content: 'Registros Adoptados',
          id: 'registrosAdoptados'
        }
      ]
    },
    {
      id: 'item-menu',
      component: <Link to='/voluntarios' />,
      content: collapsed ? <FaPeopleCarry size={25} /> : <p>Voluntarios</p>
    },
    {
      id: 'item-menu',
      component: <Link to='/mensajes' />,
      content: collapsed ? <FaEnvelope size={25} /> : <p>Mensajes</p>
    }
  ]

  return (
    <div id='sidebar' style={{ position: 'absolute' }}>
      <div style={{ position: 'sticky', display: 'flex', height: '100vh', zIndex: '2' }}>
        <Sidebar backgroundColor='#1379bdd4' style={{ border: 'none' }}>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1, marginBottom: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'flex-end', margin: 20 }}>
                {collapsed
                  ? <FaAngleRight size={25} className='sb-button' onClick={() => collapseSidebar()} style={{ cursor: 'pointer', marginRight: 9 }} />
                  : <FaAngleLeft size={25} className='sb-button' onClick={() => collapseSidebar()} style={{ cursor: 'pointer' }} />}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 10, marginBottom: 30 }}>
                {collapsed ? <h3>C.H.</h3> : <h3>CASITA HUELLITAS</h3>}
              </div>
              <div style={{ padding: '0 24px', marginBottom: '8px' }}>
                {collapsed ? <FaMinus size={25} /> : <h4>General</h4>}
              </div>
              <Menu menuItemStyles={menuItemStyles}>
                {contenidoGeneral.map((item, i) => {
                  if (item.submenu) {
                    return (
                      <SubMenu key={i} id={item.id} label={item.label}>
                        {item.submenu.map((subitem) => (
                          <MenuItem
                            className={subitem.className}
                            component={subitem.component}
                            key={subitem.id}
                          >
                            {subitem.content}
                          </MenuItem>
                        ))}
                      </SubMenu>
                    )
                  } else {
                    return (
                      <MenuItem
                        id={item.id}
                        component={item.component}
                        key={i}
                      >
                        {item.content}
                      </MenuItem>
                    )
                  }
                }
                )}
              </Menu>
              <div style={{ padding: '0 24px', marginBottom: '8px', marginTop: '32px' }}>
                {collapsed ? <FaMinus size={25} /> : <h4>Extra</h4>}
              </div>
              <Menu menuItemStyles={menuItemStyles}>
                <MenuItem id='item-menu'>
                  {collapsed ? <FaRegCalendarAlt size={25} /> : <p>Calendario</p>}
                </MenuItem>
              </Menu>

              <div style={{ padding: '0 24px', marginBottom: '8px', marginTop: '32px' }}>
                <FaMinus size={20} />
              </div>
              <Menu menuItemStyles={menuItemStyles}>
                <MenuItem id='item-menu'>
                  {collapsed ? <Logout /> : <Logout />}
                </MenuItem>
              </Menu>
            </div>
          </div>
        </Sidebar>
      </div>
    </div>
  )
}

export default SideNav
