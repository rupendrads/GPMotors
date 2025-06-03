"use client";

function ClientDetailForm() {
  return (
    <form action="" className={formStyle}>
			<h2 className="text-xl capitalize mb-2">Client Detail</h2>
			<div className={inputGroupStyle}>
				<label htmlFor="title">Title</label>
				<select name="title" className="{inputStyle}">
					
				</select>
			</div>
				

    </form>
  )
}

const formStyle = "max-w-lg flex flex-col gap-y-4 shadow rounded p-8";
const inputGroupStyle = "flex flex-col gap-2";
const inputStyle = "border shadow rounded py-2 px-3";

export default ClientDetailForm;