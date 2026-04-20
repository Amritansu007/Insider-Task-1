import { Monitor, Percent, Truck } from "lucide-react";

function Features() {
  return (
    <section className="px-6 md:px-12 py-10 text-white">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Feature 1 */}
        <div className="flex items-center gap-4">
          <div className="bg-white/10 p-4 rounded-xl">
            <Monitor size={24} />
          </div>
          <div>
            <h3 className="font-semibold">Instant Web & App</h3>
            <p className="text-zinc-300 text-sm">Start selling today</p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex items-center gap-4">
          <div className="bg-white/10 p-4 rounded-xl">
            <Percent size={24} />
          </div>
          <div>
            <h3 className="font-semibold">Integrated payments</h3>
            <p className="text-zinc-300 text-sm">&lt;1% transaction fees</p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex items-center gap-4">
          <div className="bg-white/10 p-4 rounded-xl">
            <Truck size={24} />
          </div>
          <div>
            <h3 className="font-semibold">Global delivery</h3>
            <p className="text-zinc-300 text-sm">Live tracking</p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Features;