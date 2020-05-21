import Lightning from './svgs/lightning'
import Wifi from './svgs/wifi'
import Plus from './svgs/plus'
import Edit from './svgs/edit'

const features = [
  {
    text: 'Blazing fast',
    icon: Lightning,
  },
  {
    text: 'Always available',
    icon: Wifi,
  },
  {
    text: 'Customizable',
    icon: Edit,
  },
  {
    text: 'Incremental SSG',
    icon: Plus,
  },
]

export default () => (
  <div className="features">
    {features.map(({ text, icon: Icon }) => (
      <div className="feature" key={text}>
        {Icon && <Icon height={24} width={24} />}
        <h4>{text}</h4>
      </div>
    ))}
  </div>
)
