import { EColor, ZIndex, Size } from "@defines/css"
import { Icon } from '@components/common/icon/iconForm';

interface ModalProps {
  title: string,
  description: string,
  background?: EColor,
  titleFontSize?: Size,
  descriptionFontSize?: Size,
}

export function Modal(props: ModalProps) {
  const {
    title,
    description,
    background = EColor.WHITE,
    titleFontSize = "32px",
    descriptionFontSize = "16px"
  } = props;
  return (
    <>
      <div className="modal-wrap">
        <div className="modal-head">
          <span>{title}</span>
          <Icon
            icon={"close"}
            width="40px"
            height="auto"
          />
        </div>
        <div className="modal-body">
          <span>{description}</span>
        </div>
      </div>
      <style jsx>
        {`
          .modal-wrap {
            z-index: ${ZIndex.MODAL};
            background: ${background};
            border: 1px solid ${EColor.BLACK};
            border-radius: 4px;
          }

          .modal-head {
            border-bottom: 1px solid ${EColor.BLACK};
            padding: 3px 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .modal-head span {
            font-size: ${titleFontSize};
          }

          .modal-body {
            padding: 60px 10px;
          }

          .modal-body span {
            font-size: ${descriptionFontSize};
          }
        `}
      </style>
    </>
  )
}