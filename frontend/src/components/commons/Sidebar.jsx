import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from 'react-pro-sidebar'
import { Link } from 'react-router-dom'
import { FaEllipsisH, FaRegTimesCircle, FaDog, FaPeopleCarry, FaEnvelope, FaRegCalendarAlt, FaMinus, FaHome } from 'react-icons/fa'
import Logout from '../sesion/Logout'

export const SideNav = () => {
  const { toggleSidebar, broken, collapsed } = useProSidebar()
  const { collapseSidebar } = useProSidebar()

  const sidenavStyle = { border: 'none', boxShadow: '-2px 0px 20px 4px rgba(0,0,0,0.81)' }

  const menuItemStyles = {
    root: {
      fontSize: '13px',
      fontWeight: 400
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined
    })
  }

  return (
    <div id='sidebar' style={{ position: 'absolute' }}>
      <div style={{ position: 'sticky', display: 'flex', height: '100vh', zIndex: '2' }}>

        <main style={{ position: 'absolute' }}>
          <div style={{ padding: '16px 24px', color: '#44596e' }}>
            <div style={{ marginBottom: '16px' }}>
              {broken && (
                <FaEllipsisH size={25} className='sb-button' onClick={() => toggleSidebar()} style={{ position: 'fixed', zIndex: '2', cursor: 'pointer' }} />
              )}
            </div>
          </div>
        </main>

        <Sidebar breakPoint='lg' backgroundColor='#1379bd' style={collapsed ? { border: 'none' } : sidenavStyle}>
          <main>
            <div style={{ padding: '16px 24px', color: '#44596e' }}>
              <div style={{ marginBottom: '16px' }}>
                {broken && (
                  <FaRegTimesCircle size={25} className='sb-button' onClick={() => toggleSidebar()} style={{ position: 'fixed', zIndex: '2', cursor: 'pointer' }} />
                )}
              </div>
            </div>

            <main>
              <div style={{ position: 'absolute', top: 0 }}>
                {collapsed
                  ? <FaEllipsisH size={25} className='sb-button' onClick={() => collapseSidebar()} style={{ position: 'fixed', zIndex: '2', cursor: 'pointer', marginLeft: 25, marginTop: 10 }} />
                  : <FaRegTimesCircle size={25} className='sb-button' onClick={() => collapseSidebar()} style={{ position: 'fixed', zIndex: '2', cursor: 'pointer', marginLeft: 15, marginTop: 10 }} />}
              </div>
            </main>

            <main component={<Link to='/mascotas' />} style={{ display: 'flex', justifyContent: 'center', marginTop: 10, marginBottom: 30 }}>
              {collapsed ? <h3>C.H.</h3> : <h3>CASITA HUELLITAS</h3>}
            </main>
          </main>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1, marginBottom: '32px' }}>
              <div style={{ padding: '0 24px', marginBottom: '8px' }}>
                {collapsed ? <FaMinus size={25} /> : <h4>General</h4>}
              </div>
              <Menu menuItemStyles={menuItemStyles}>
                <MenuItem id='item-menu' component={<Link to='/administracion' />}>
                  {collapsed ? <FaHome size={25} /> : <p>Inicio</p>}
                </MenuItem>
                <SubMenu id='item-menu' label={collapsed ? <FaDog size={25} /> : <p>Mascotas</p>}>
                  <MenuItem className='menuitem' component={<Link to='/mascotas' />}>
                    Lista de Mascotas
                  </MenuItem>
                  <MenuItem className='menuitem' component={<Link to='/adoptados' />}>
                    Registros Adoptados
                  </MenuItem>
                </SubMenu>
                <MenuItem id='item-menu' component={<Link to='/voluntarios' />}>
                  {collapsed ? <FaPeopleCarry size={25} /> : <p>Voluntarios</p>}
                </MenuItem>
                <MenuItem id='item-menu' component={<Link to='/mensajes' />}>
                  {collapsed ? <FaEnvelope size={25} /> : <p>Mensajes</p>}
                </MenuItem>
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
