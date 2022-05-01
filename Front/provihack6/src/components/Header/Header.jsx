import { HeaderStyled, ImgHeader } from './styled'
import menu from '../../assests/menu.svg'
import MoreVert from '../../assests/more-vert.svg'


export default function Header(props) {
  return (
    <HeaderStyled>
      <ImgHeader src={menu} />
      <p>{props.name}</p>
      <ImgHeader src={MoreVert} />
    </HeaderStyled>
  )
}