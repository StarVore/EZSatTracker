// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
use tauri_plugin_log::{Target, TargetKind};
use tauri::{TitleBarStyle, WebviewUrl, WebviewWindowBuilder};

mod serial_util;

#[tauri::command]
fn list_serial_ports() -> Result<Vec<String>, String> {
    match serial_util::list_serial_ports() {
        Ok(ports) => Ok(ports),
        Err(_e) => {
            log::error!("Failed to get serial ports: {}", _e);
            Ok([].to_vec())
        }
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_log::Builder::new()
            .target(Target::new(
                TargetKind::Stdout,
            ))
            .build())
        .invoke_handler(tauri::generate_handler![list_serial_ports])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
