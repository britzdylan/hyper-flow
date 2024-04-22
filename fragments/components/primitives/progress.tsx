import { cn } from '#fragments/lib/utils'
import { JsxElementProps } from '#fragments/lib/types'

interface ProgressProps extends JsxElementProps {
  value?: number
  progressClassName?: string
}

function Progress(props: ProgressProps): JSX.Element {
  const { class: className, value = 0, ...rest } = props

  return (
    <div
      aria-valuemax="100"
      aria-valuemin="0"
      role="progressbar"
      class={cn('relative h-4 overflow-hidden rounded-full bg-secondary w-[60%]', className)}
      {...rest}
    >
      <div
        class={cn('h-full w-full flex-1 bg-primary transition-all', props.progressClassName)}
        x-bind:style="progressBar"
      ></div>
    </div>
  )
}

function ProgressDemo(): JSX.Element {
  return (
    <>
      <Progress x-data={`progressInterval`} progressClassName="bg-primary" />
    </>
  )
}

export { Progress, ProgressDemo }
