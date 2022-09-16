import { EColor, Size, ZIndex } from "@defines/css"
import { Button } from "@components/common/button/button"

interface AlertProps {
    onClickConfirm: (event: Event) => void,
    onClickCancel?: (event: Event) => void,
    width?: Size,
    confirmText: string,
    cancelText?: string,
    title: string,
    description?: string,
}

export function Alert(props: AlertProps) {
    const {
        width = '400px',
        title,
        description,
        confirmText,
        cancelText,
        onClickConfirm,
        onClickCancel
    } = props
    return (
        <>
            <div className="alert-wrapper">
                <div className="alert-head">
                    {title}
                </div>
                {
                    description &&
                    <div className="alert-body">
                        {description}
                    </div>
                }
                <div className="alert-footer">
                    {
                        cancelText &&
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={() => onClickCancel}
                        >
                            {cancelText}
                        </Button>
                    }
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => onClickConfirm}
                    >
                        {confirmText}
                    </Button>
                </div>
            </div>
            <style jsx>
                {`
                    .alert-wrapper {
                        z-index: ${ZIndex.ALERT};
                        background: ${EColor.WHITE};
                        border-radius: 4px;
                        border: 1px solid ${EColor.BLACK};
                        width: ${width};
                        text-align: center;
                    }

                    .alert-head {
                        border-bottom: 1px solid ${EColor.BLACK};
                        font-size: 24px;
                        padding: 30px 10px;
                    }

                    .alert-body {
                        padding: 30px 10px;
                        font-size: 16px;
                    }

                    .alert-footer {
                        display: flex;
                        justify-content: space-around;
                        padding: 30px 10px;
                    }
                `}
            </style>
        </>
    )
}