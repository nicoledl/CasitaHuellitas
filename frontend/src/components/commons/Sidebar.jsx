import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from 'react-pro-sidebar'
import { Link } from 'react-router-dom'
import { FaAngleRight, FaAngleLeft, FaDog, FaPeopleCarry, FaWpforms, FaRegCalendarAlt, FaMinus, FaHome } from 'react-icons/fa'
import Logout from '../sesion/Logout'

const estiloItem = { display: 'flex', alignItems: 'center', gap: '10px' }

export const SideNav = () => {
  const { collapsed, collapseSidebar } = useProSidebar()
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
      content: collapsed ? <FaHome size={25} /> : <span style={estiloItem}><FaHome size={25} /><p>Inicio</p></span>
    },
    {
      id: 'item-menu',
      label: collapsed ? <FaDog size={25} /> : <span style={estiloItem}><FaDog size={25} /><p>Mascotas</p></span>,
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
    // {
    //   id: 'item-menu',
    //   component: <Link to='/contactosvoluntarios' />,
    //   content: collapsed ? <FaPeopleCarry size={25} /> : <span style={estiloItem}><FaPeopleCarry size={25} /><p>Voluntarios</p></span>
    // },
    {
      id: 'item-menu',
      component: <Link to='/solicitudes' />,
      content: collapsed ? <FaWpforms size={25} /> : <span style={estiloItem}><FaWpforms size={25} /><p>Formularios</p></span>
    }
  ]

  return (
    <div id='sidebar'>
      <Sidebar backgroundColor='#292929'>
        <div style={{ display: 'flex', justifyContent: 'flex-end', margin: 20 }}>
          {collapsed
            ? <FaAngleRight size={25} className='sb-button' onClick={() => collapseSidebar()} style={{ cursor: 'pointer', marginRight: 9 }} />
            : <FaAngleLeft size={25} className='sb-button' onClick={() => collapseSidebar()} style={{ cursor: 'pointer' }} />}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 10, marginBottom: 30 }}>
          {collapsed ? <h2 style={{ fontFamily: "'Pacifico', cursive" }}>C.H.</h2> : <h2 style={{ fontFamily: "'Pacifico', cursive" }}>Casita Huellitas</h2>}
        </div>
        <div style={{ padding: '0 24px', marginBottom: '8px' }}>
          {collapsed ? null : <h4>General</h4>}
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
        {/* <div style={{ padding: '0 24px', marginBottom: '8px', marginTop: '32px' }}>
          {collapsed ? <FaMinus size={25} /> : <h4>Extra</h4>}
        </div> */}
        {/* <Menu menuItemStyles={menuItemStyles}>
          <MenuItem id='item-menu'>
            {collapsed ? <FaRegCalendarAlt size={25} /> : <span style={estiloItem}><FaRegCalendarAlt size={25} /><p>Calendario</p></span>}
          </MenuItem>
        </Menu> */}

        <div style={{ padding: '0 24px', marginBottom: '8px', marginTop: '32px' }}>
          <FaMinus size={20} />
        </div>
        <Menu menuItemStyles={menuItemStyles}>
          <MenuItem id='item-menu'>
            {collapsed ? <Logout collapsed /> : <Logout collapsed={false} />}
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  )
}

export default SideNav
