export type OrderStatusList =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

type OrderStatusProps = {
  status: OrderStatusList
}

const orderStatusMap: Record<OrderStatusList, string> = {
  pending: 'Pendente',
  canceled: 'Cancelado',
  delivered: 'Entregue',
  delivering: 'Em entrega',
  processing: 'Em preparo',
}

export const OrderStatus = ({ status }: OrderStatusProps) => {
  return (
    <div className="flex items-center gap-2">
      {status === 'pending' && (
        <span className="h-2 w-2 rounded-full bg-slate-400" />
      )}

      {status === 'processing' && (
        <span className="h-2 w-2 rounded-full bg-amber-500" />
      )}

      {status === 'delivering' && (
        <span className="h-2 w-2 rounded-full bg-amber-500" />
      )}

      {status === 'delivered' && (
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
      )}

      {status === 'canceled' && (
        <span className="h-2 w-2 rounded-full bg-rose-500" />
      )}

      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  )
}
